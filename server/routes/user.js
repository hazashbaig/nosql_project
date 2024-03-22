const express = require('express');
const { authenticateJwt, SECRET, jwt } = require("../middleware/auth");
const { User, Art } = require("../db");
const router = express.Router();

  router.get('/me', authenticateJwt, async (req, res)=>{
    const user = await User.findOne({username: req.user.username});
    if(!user){
      res.status(404).json({message: 'User not found'});
      return
    }
    res.json({
      username: user.username
    })
  })

  router.post('/signup', async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (user) {
      res.status(403).json({ message: 'User already exists' });
    } else {
      const newUser = new User({ username, password });
      await newUser.save();
      const token = jwt.sign({ username, role: 'user' }, SECRET, { expiresIn: '1h' });
      res.json({ message: 'User created successfully', token });
    }
  });
  
  router.post('/signin', async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username, password });
    console.log("inside login")
    console.log(user)
    if (user) {
      console.log("inside user");
      const token = jwt.sign({ username, role: 'user' }, SECRET, { expiresIn: '1h' });
      res.json({ message: 'Logged in successfully', token });
    } else {
      res.status(403).json({ message: 'Invalid username or password' });
    }
  });
  
  router.get('/myart',authenticateJwt, async(req,res) => {
    const {username} = req.headers;
    const user = await Art.find({username});
    if(user){
      res.status(200).json(user);
    }else{
      res.status(401).json({message: 'no art found'})
    }
  })

  router.delete('/myart/:id', authenticateJwt, async(req, res) =>{
    const myart = await Art.findByIdAndDelete(req.params.id);
    if(myart){
      res.status(200).json({message:"deleted successfully"});
    }else{
      res.status(401).json({message: "no art found"});
    }
  })

  router.put('/myart/:id', authenticateJwt, async(req, res) =>{
    const myart = await Art.findByIdAndUpdate(req.params.id, req.body, {new:true});
    if(myart){
      res.status(200).json({message:"Art updated successfuly"});
    }else{
      res.status(401).json({message:"no art found"});
    }
  })

router.get("/myart/:id",authenticateJwt, async(req, res)=>{
  const myartId = req.params.id;
  const myart = await Art.findById(myartId);
  if(myart){
    res.json({myart});
  }
})

  router.post('/art', authenticateJwt, async(req,res) => {
      const art = new Art(req.body);
      await art.save();
      res.status(200).json({message: 'Art uploaded successfully'})
  })

  router.get('/art', authenticateJwt, async(req, res) => {
    const art = await Art.find({});
    res.json(art);
  })
  
  module.exports = router;