const  mongoose  =  require ( 'mongoose' ) ;
 mongoose.connect("mongodb+srv://teste:1234@ics.otxp6.mongodb.net/teste?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});


