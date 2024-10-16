"use client"

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import axios from 'axios';
import Image from 'next/image';
import React, { useState } from 'react'

function page() {

    const [image, setImage] = useState(null)
    const [errors, setErrors] = useState(null)
    const [loading, setLoading] = useState(false)

    const uploadFile = async () => {
        const formData = new FormData()
        formData.append("file", image)
        formData.append('Dfo_Ded_Id', "2");
        try {
            setLoading(true)
            const urlNormal = "http://mkbs-app-service.azurewebsites.net/api/DocumentFourni/create"
            const response = await axios.post(urlNormal, formData, { headers: { 'Content-Type': 'multipart/form-data' } });
            // const response = await fetch("http://192.168.1.12:3000/api", {
            //   method: 'POST',
            //   body: formData,
            //   headers: {
            //     'Content-Type': 'multipart/form-data',
            //   },
            // });
            console.log("response", response);
            return response
        } catch (error) {
            console.error('Erreur lors de l\'upload:', error);
            setErrors(error)
        }finally{
            setLoading(false)
        }
    }

    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <div className="flex w-full max-w-sm items-center space-x-2">
                <Input type="file" placeholder="File" accept=".png, .jpeg" onChange={(e) => {setImage(e.target.files[0]); console.log(e.target.files[0]);
                }
                }/>
                <Button disabled={image === null} type="submit" onClick={uploadFile}>{loading && <span class="inline-block h-4 w-4 animate-spin rounded-full border-2 border-t-2 border-gray-200 border-t-blue-500"></span>}
                Upload</Button>
            </div>
            {/* {errors && <pre>{JSON.stringify(errors, null, 4).toString()}</pre>} */}
                {image && <Image src={URL.createObjectURL(image)} width={500} height={500} alt="Upload" />}
        </div>
    )
}

export default page