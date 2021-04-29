import { Request, Response } from "express";
// import { Item } from "../Interfaces/Item";
import Item from '../Models/Item'

class ItemsController {
    public async index(req: Request, res: Response) {
        try {
            const project = await Item.findAll()
            res.status(200).json(project);
            } catch (e) {
            res.status(500).json(e.message);
            }
        }
}

export default ItemsController