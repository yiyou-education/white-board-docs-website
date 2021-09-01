const glob=require("glob");
const path=require("path");
const {promisify}=require("util");
const {spawn}=require("cross-spawn");

const glob_path=path.resolve(__dirname,"../mermaid/**/*.mmd");

async function build_mermaid(){
  try {
    const glob_match_file=await promisify(glob)(glob_path);
    const transform_task=glob_match_file.map(async (file_path)=>{
      const {name}=path.parse(file_path);
      const output_path=path.resolve(__dirname,"../images/",name.concat(".png"));
      await spawn("mmdc",[
        "--scale",3,
        "--width",5000,
        "--input",file_path,
        "--output",output_path,
      ]);
    });
    await Promise.all(transform_task);
    await spawn("deploy-action",["deploy","--log","true"]);
  } catch (error) {
    console.log("error",error);
  };
};

build_mermaid();