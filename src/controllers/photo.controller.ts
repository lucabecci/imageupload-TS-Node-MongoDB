import { json, Request, Response } from "express";
import path from "path";
import fs from "fs-extra";

//helpers for checks and more functions
import { bodyCheck, createCheckCamps, IDCheck } from "../helpers/photo.checks";
//schema import
import Photo from "../models/Photo";

export const createPhoto = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { title, description } = req.body;
    const newPhoto = {
      title,
      description,
      imagePath: req.file.path,
    };
    const checked = createCheckCamps(title, description, req.file.path);
    if (checked === true) {
      return res.json({
        petition: false,
        message: "Check all camps and try again",
      });
    }
    const photo = await new Photo(newPhoto);
    await photo.save();

    return res.json({
      petition: true,
      photocreated: photo,
    });
  } catch (e) {
    console.log(e);
    return res.status(500).json({
      petition: false,
      message: "Server error, try again later.",
    });
  }
};

export const getPhotos = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const photos = await Photo.find();
    return res.json({
      petition: true,
      data: [photos],
    });
  } catch (e) {
    console.log(e);
    return res.status(500).json({
      petition: false,
      message: "Server error, try again later.",
    });
  }
};

export const getPhoto = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const id: string = req.params.id;
    const checked = IDCheck(id);
    if (checked) {
      return res.json({
        data: false,
        message: "ID short, try again with correct ID.",
      });
    }
    try {
      const photo = await Photo.findById(id);
      return res.json({
        petition: true,
        data: photo,
      });
    } catch (e) {
      return res.status(400).json({
        petition: false,
        message: "ID invalid, try again with correct ID",
      });
    }
  } catch (e) {
    return res.status(500).send("Internal server error, try again later.");
  }
};

export const deletePhoto = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const id: string = req.params.id;
    const checked = IDCheck(id);
    if (checked) {
      return res.json({
        data: false,
        message: "ID short, try again with correct ID.",
      });
    }
    const photo = await Photo.findByIdAndDelete(id);
    if (photo) {
      await fs.unlink(path.resolve(photo.imagePath));
      return res.json({
        petition: true,
        photodeleted: photo,
      });
    }
    return res.json({
      petition: false,
      message: "ID image not found",
    });
  } catch (e) {
    console.log(e);
    return res.status(500).json({
      petition: false,
      message: "Internal server error, try again later.",
    });
  }
};

export const updatePhoto = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const id = req.params.id;
    const { title, description } = req.body;
    const idChecked = IDCheck(id);
    const bodyChecked = bodyCheck(title, description);

    if (idChecked == true) {
      return res.status(400).json({
        petition: false,
        message: "ID short, try again with complete ID.",
      });
    } else if (bodyChecked == true) {
      return res.status(400).json({
        petition: false,
        message:
          "title or description not found, please fill in the parameters",
      });
    }

    try {
      const updatedPhoto = await Photo.findByIdAndUpdate(
        id,
        {
          title,
          description,
        },
        { new: true }
      );
      return res.json({
        petition: true,
        updatedPhoto,
      });
    } catch {
      return res.status(400).json({
        petition: false,
        message: "ID invalid, please use the correct ID.",
      });
    }
  } catch (e) {
    console.log(e);
    return res.status(500).json({
      petition: false,
      message: "Server internal erro, please try later.",
    });
  }
};
