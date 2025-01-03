import Image from "next/image";
import { client } from "@/sanity/lib/client";


interface Blog{
    heading: string;
    description: string;
    slug: string;
    imageUrl:string ;
  }

const Hero = async () =>{
    const data:Blog = await client.fetch(`*[_type == "blog"]{
        heading,
          description,
          "slug": slug.current,
          "imageUrl": image.asset->url
        }[1]`)

    return(
        <main>
            <div>
                <Image src={data.imageUrl} alt="${}" height={300} width={300}/>
                {data.description}
                <h1>{data.heading}</h1>
            </div>

            
    {/* <p>Hello world</p>
      <Image src={data.imageUrl} alt="Image" width={300} height={300} />
      Now the working with the help of Sanity {data.description}
      {data.heading} */}
        </main>
    )
}

export default Hero;