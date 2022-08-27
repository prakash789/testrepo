import {
  Box,
  Stack,
  Heading,
  Button,
  Tabs,
  TabList,
  Tab,
  TabPanel,
  TabPanels,
} from "@chakra-ui/react";
import React, { useState,useCallback, useRef,useEffect } from "react";
import INPUT from "../../Components/login-input";
import { useFormik } from "formik";
import { primaryLoginC } from "../../Theme";
import { OPDConsultData, mrStatusHeader } from "../../assests";
import { TableCell, TableRow } from "@material-ui/core";
import HospitalTable from "../../Components/Tables/HospitalTable/HospitalTable";
import ActionButton from "../../Components/PopOver-Action-Buton";
import { useMediaQuery } from '@chakra-ui/react'
import { Select } from '@chakra-ui/react'
import { SERVER_ADDRESS } from "../../Services/Config";
import axios from "../Helpers/apiClient";
import ReactCrop from "react-image-crop";
import "../../../node_modules/react-image-crop/dist/ReactCrop";
import ImageCrop from '../../Components/ImageCrop'
const leftTitle = "NEW MR ONBOARDING FORM";
const rightTitle = "MR BOARDING LINK SHARE";

const MrOnboarding = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const tabs = ["NEW MR ONBOARDING", "STATUS"];
  const [isLessThan700] = useMediaQuery('(max-width: 700px)');

  return (
    <Tabs
      isLazy
     
      onChange={(index) => {
        setTabIndex(index);
       
      }}>
      <TabList  position="sticky"
      top={"55px"} w="100%" bg="white" zIndex={5}>
        {tabs.map((tab, index) => (
          <Tab fontSize={isLessThan700 ?"13px" : ""} m="1px" _focus={{ boxShadow: "none" }}>
            {tab}
          </Tab>
        ))}
      </TabList>
      <TabPanels >
        <TabPanel >
          <NewMrOnboarding />
          {/* <MrOnboardingLink /> */}
        </TabPanel>

        <TabPanel h="500px" overflow="auto"   >
        <StatusTable/>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

const NewMrOnboarding = () => {
  const [loading, setLoading] = useState(false);

  const { handleChange, values, handleSubmit, setFieldValue } = useFormik({
    initialValues: {
      state: "",
      city: "",
      name: "",
      company: "",
      contact: "",
      email: "",
      addressline1: "",
      addressline2:"",
      locality:"",
      zipcode:""

    },
    onSubmit: (values) => {
      let url = `${SERVER_ADDRESS}/api/v1/hospital/on-board-hospital`;
      let temp = {
        city: values.city,
        state: values.state,
        name: values.name,
        contact: values.contact,
        email: values.email,
        addressline1: values.addressline1,
        addressline2: values.addressline2,
        locality: values.locality,
        zipcode: values.zipcode
      };
      console.log(temp, "temp");
      setLoading(true)
      try {
        axios
          .post(url, temp)
          .then(async (response) => {
            if (response.status === 200) {
              setLoading(false)
              alert(response.data.message);

            }
            setLoading(false)
            alert(response.data.message);
          })
          .catch((error) => {
            setLoading(false)
            console.log(error, "error");

          });
      } catch (error) {
        setLoading(false)
        console.log("Try and Catch Error", error);
      }

    },
  });
  const [isLessThan700] = useMediaQuery('(max-width: 700px)');


  return (
    <Box flex={3} p="20px" boxShadow="dark-lg" m="5px" borderRadius="10px">
      <HeadingX title={leftTitle} size={isLessThan700 ? "sm" :"md"} />
      <br />
      <br />
      <form onSubmit={handleSubmit}>
        <Stack > 
          <Stack pl={isLessThan700 ? "":"33%"} pr={isLessThan700 ? "":"33%"} width={isLessThan700 ? "220px" : ""}>
            {/* <INPUT label="STATE" name="state" type="state" width={isLessThan700 ? "220px" :"" }   required /> */}
            <Select placeholder='State'onChange={handleChange}>
                    <option value='option1'>Gujarat</option>
                    <option value='option2'>Haryana</option>
                    <option value='option3'>Punjab</option>
                    <option value='option2'>Haryana</option>
                    <option value='option3'>Punjab</option>
                    <option value='option2'>Haryana</option>
                    <option value='option3'>Punjab</option>
                    <option value='option2'>Haryana</option>
                    <option value='option3'>Punjab</option>
                    <option value='option2'>Haryana</option>
                    <option value='option3'>Punjab</option>
                  </Select>
            <br />
            {/* <INPUT label="CITY" name="city" type="city"  required /> */}
            <Select placeholder='City' onChange={handleChange}>
                    <option value='option1'>mohali</option>
                    <option value='option2'>chandigarh</option>
                    <option value='option3'>Gurgaon</option>
                    <option value='option2'>Faridabad</option>
                    <option value='option3'>Pune</option>
                    <option value='option2'>Kasol</option>
                    <option value='option3'>Ahmdabad</option>
                    <option value='option2'>Haryana</option>
                    <option value='option3'>Punjab</option>
                    <option value='option2'>Haryana</option>
                    <option value='option3'>Punjab</option>
                  </Select>

            <br />
            
            <INPUT label="NAME" name="name" type="name"  required />
            <br />
            <INPUT label="COMPANY" name="company" type="company"  required />
            <br />
            <INPUT label="CONTACT" name="contact" type="contact"  required />
            <br />
            <INPUT label="E-MAIL" name="email" type="email"  required />
            <br />
            {/* <INPUT label="PHOTO" name="photo" type="file"  required /> */}
              <ImageCrop/>
            <br />
            <INPUT label="ADDRESS LINE 1" name="addressline1" type="address" required />
            <br />
            <INPUT label="ADDRESS LINE 2" name="addressline2" type="address" required />
            <br />
            <INPUT label="LOCALITY" name="locality" type="text" required />
            <br />
            <INPUT label="PIN CODE" name="zipcode" type="number" required />
            <br />

          </Stack>
          <Button
            isLoading={false}
            loadingText="Uploading..."
            bgGradient={primaryLoginC}
            type="submit"
            color="#fff">
            UPLOAD FOR APPROVAL
          </Button>
        </Stack>
      </form>
    </Box>
  );
};
const MrOnboardingLink = () => {
  const { handleChange, values, handleSubmit, setFieldValue } = useFormik({
    initialValues: {
      name: "",
      email: "",
      contact: "",
    },
    onSubmit: (values) => {},
  });
  return (
    <Box flex={1} p="20px" boxShadow="dark-lg" m="5px" borderRadius="10px">
      <HeadingX title={rightTitle} size="sm" />
      <br />
      <br />
      <br />
      <br />
      <form onSubmit={handleSubmit}>
        <Stack>
          <Stack pl="30px" pr="30px">
            <br />
            <INPUT label="NAME" name="name" type="name" required />
            <br />
            <INPUT label="E-MAIL" name="email" type="email" required />
            <br />
            <INPUT label="CONTACT" name="contact" type="contact" required />

            <br />
          </Stack>
          <Button
            isLoading={false}
            loadingText="Sharing..."
            bgGradient={primaryLoginC}
            type="submit"
            color="#fff">
            SHARE THE LINK
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

const HeadingX = ({ title, size }) => {
  return (
    <Heading size={size} textAlign="center">
      {title}
    </Heading>
  );
};


const StatusTable = () => {
  return(
    <HospitalTable header={mrStatusHeader}>
      {OPDConsultData.map((item) => {
        return (
          <TableRow>
            <TableCell>{item.date}</TableCell>
            <TableCell>{item.time}</TableCell>
            <TableCell>{item.doctor}</TableCell>
            <TableCell >{item.dept}</TableCell>
            <ActionButton actionStatus={item.status} />
          </TableRow>
        );
      })}
    </HospitalTable>

  )
}

function Photo() {
  const [upImg, setUpImg] = useState();
  const imgRef = useRef(null);
  const previewCanvasRef = useRef(null);
  const [crop, setCrop] = useState({ unit: "%", width: 30, aspect: 16 / 9 });
  const [completedCrop, setCompletedCrop] = useState(null);

  const onSelectFile = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.addEventListener("load", () => setUpImg(reader.result));
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const onLoad = useCallback((img) => {
    imgRef.current = img;
  }, []);

  useEffect(() => {
    if (!completedCrop || !previewCanvasRef.current || !imgRef.current) {
      return;
    }

    const image = imgRef.current;
    const canvas = previewCanvasRef.current;
    const crop = completedCrop;

    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    const ctx = canvas.getContext("2d");
    const pixelRatio = window.devicePixelRatio;

    canvas.width = crop.width * pixelRatio * scaleX;
    canvas.height = crop.height * pixelRatio * scaleY;

    ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    ctx.imageSmoothingQuality = "high";

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width * scaleX,
      crop.height * scaleY
    );
  }, [completedCrop]);

  return (
    <div className="App">
      <div>
        <input type="file" accept="image/*" onChange={onSelectFile} />
      </div>
      <ReactCrop
        src={upImg}
        onImageLoaded={onLoad}
        crop={crop}
        onChange={(c) => setCrop(c)}
        onComplete={(c) => setCompletedCrop(c)}
      />
      <div>
        <canvas
          ref={previewCanvasRef}
          // Rounding is important so the canvas width and height matches/is a multiple for sharpness.
          style={{
            width: Math.round(completedCrop?.width ?? 0),
            height: Math.round(completedCrop?.height ?? 0)
          }}
        />
      </div>
      <p>
        Note that the download below won't work in this sandbox due to the
        iframe missing 'allow-downloads'. It's just for your reference.
      </p>
      <button
        type="select"
        disabled={!completedCrop?.width || !completedCrop?.height}
        // onClick={() =>
        //   generateDownload(previewCanvasRef.current, completedCrop)
        // }
      >
        Download cropped image
      </button>
    </div>
  );
}


export default MrOnboarding;
