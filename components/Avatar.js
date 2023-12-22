import Image from "next/image";

const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-[737px]">
      <Image
        src={"/avatar.png"}
        width={737}
        height={678}
        alt=""
        className="translate-x-0 max-w-[737px] max-h-[678px]"
      />
    </div>
  );
};

export default Avatar;
