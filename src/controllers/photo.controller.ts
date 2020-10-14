import { json, Request, Response } from 'express'
import path from 'path'
import fs from 'fs-extra'


import Photo from '../models/Photo'

export const createPhoto = async(req: Request, res: Response): Promise<Response> => {
    const { title, description } = req.body;
    const newPhoto = {
        title,
        description,
        imagePath: req.file.path
    }

    const photo = await new Photo(newPhoto)
    await photo.save();

    return res.json({
        message: 'Photo successfully saved.',
        photo
    })
}

export const getPhotos = async(req: Request, res: Response): Promise<Response> => {
    const photos = await Photo.find();
    return res.json({
        data: [photos]
    })
}

export const getPhoto =  async(req: Request, res: Response): Promise<Response> => {
    const id: string = req.params.id
    const photo = await Photo.findById(id)
    return res.json({
        data: photo
    })
}

export const deletePhoto = async(req: Request, res: Response): Promise<Response> => {
    const id: string = req.params.id;
    const photo = await Photo.findByIdAndDelete(id);
    if(photo){
        await fs.unlink(path.resolve(photo.imagePath))
        return res.json({
            deleted: true,
            photo
        })
    }
    return res.json({
        deleted: false,
        message: 'ID image not found'
    })
    
}

export const updatePhoto = async(req: Request, res: Response): Promise<Response> => {
    const id = req.params.id;
    const {title, description} = req.body;
    const updatedPhoto = await Photo.findByIdAndUpdate(id, {
        title,
        description
    }, {new: true})
    return res.json({
        message: 'Updated successfully',
        updatedPhoto
    })
}