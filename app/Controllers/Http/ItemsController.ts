import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import { schema } from '@ioc:Adonis/Core/Validator';
import Item from 'App/Models/Item';


export default class ItemsController {
    public async index(){
        // const items = await Database.from('items').select('*');
        return Item.all();
    }
    public async store({request,response}:HttpContextContract){
    //    const body = request.body();

       const newSchema = schema.create({
        name:schema.string({trim:true}),
        price:schema.number()
    })

       const payload = await request.validate({schema:newSchema})

      

       const item = await Item.create(payload);
       response.status(201);

       return item;


    }
    public async show({params}:HttpContextContract){
        const item = await Item.findOrFail(params.id);
        return item
    }
    public async update({request,params}:HttpContextContract){
         const body = request.body();
         const item = await Item.findOrFail(params.id);
          item.name = body.name;
          item.price = body.price;

          return item.save();

    }
    public async destroy({params}:HttpContextContract){
        const item = await Item.findOrFail(params.id);
        return item.delete();

    }
}
