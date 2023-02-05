import Route from '@ioc:Adonis/Core/Route'
// import Database from '@ioc:Adonis/Lucid/Database'





Route.resource('items',"ItemsController").apiOnly();

// Route.get('/', async ({ view }) => {

//   const items = await Database.from('items').select('*')
//   return items
// })

// // Route.get('/post',async ({view}) => {
// //   return view.render("product/view");
// // })
// Route.on("/post").render("product/view")

// Route.post("/post", ({response})=>{
//   // const {name , author , description , price}= request.body()
//   // return {name , author , description , price}
//   return response.redirect('/post');
// }).as("node_p")

// Route.patch('/post/:id', (params)=>{
//   return {params};
// }).where('id',{
//   match:/^[0-9]+$/,
//   cast : (id)=>(Number(id))
// }).as("node_del")

