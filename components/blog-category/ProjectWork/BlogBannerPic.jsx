import Image from "next/image";


const BlogBannerPic = ({BannerImg}) => {
 
  return (
    <div  className=" w-full" >
        <Image src={BannerImg}    alt="" className="mx-auto  w-full object-cover"/>
    </div>
  );
};

export default BlogBannerPic;
