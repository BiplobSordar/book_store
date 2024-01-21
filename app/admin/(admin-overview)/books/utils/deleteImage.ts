import {
  generateSHA1,
  generateSignature,
  getPublicIdFromUrl,
} from "@/lib/utils";
import axios from "axios";

export const deleteImage = async (cloudinaryUrl?: String) => {
  const publicId = getPublicIdFromUrl(cloudinaryUrl);
  const cloudName = "djjejrmrg";
  const timestamp = new Date().getTime();
  const apiKey = "993691778194144";
  const apiSecret = "eRQq7wjXFf3uAfnOnptmC7HB-g4";
  const signature = generateSHA1(generateSignature(publicId, apiSecret));
  const url = `https://api.cloudinary.com/v1_1/${cloudName}/image/destroy`;

  try {
    const response = await axios.post(url, {
      public_id: publicId,
      signature: signature,
      api_key: apiKey,
      timestamp: timestamp,
    });

    return response;
  } catch (error) {
    console.error(error);
    return error;
  }
};
