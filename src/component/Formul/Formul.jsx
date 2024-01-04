import { useState, useEffect }  from "react";
import "./Formul.css";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import * as formik from "formik";
import * as yup from "yup";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";


export const Formulaire = () => {
  const [name, setName] = useState("name");
  const [category, setCategory] = useState("category");
  const [description, setDescription] = useState("description");
  const [price, setPrice] = useState("price");
  const [oldprice, setOldprice] = useState("oldprice");
  const [image, setImage] = useState("image");

  const { Formik } = formik;
  function createprod () {
    const formData = new FormData()
    formData.append('name', name)
    formData.append('category', category)
    formData.append('description', description)
    formData.append('price', price)
    formData.append('oldprice', oldprice)
    formData.append('image', image)

    fetch("http://localhost:5000/auth/createprod")
      .then(async function (response) {
        if (!response.ok) {
 console.log(response)        }
      })
      .catch(function (err) {
        console.log(err);
      });
  

  }

  const schema = yup.object().shape({
    name: yup.string().required(),
    category: yup.string().required(),
    description: yup.string().required(),
    newprice: yup.string().required(),
    oldprice: yup.string().required(),
    image: yup.mixed().required(),
    terms: yup.bool().required().oneOf([true], "terms must be accepted"),
  });
  useEffect (()=>{
  },[])
  return (
    <Formik
      validationSchema={schema}
      onSubmit={createprod}
      initialValues={{
        name: "",
        category: "",
        description: "",
        price: "",
        old_price: "",
        image: null,
        terms: false,
      }}
    >
      {({ handleSubmit, handleChange, touched, errors }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group
              as={Col}
              md="4"
              controlId="validationFormik101"
              className="position-relative"
            >
              <Form.Label >name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                onChange={(e)=>{
                  setName(e.target.value);
                
  
                    
  
                }}
                isValid={touched.name && !errors.name}
              />
              <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group
              as={Col}
              md="4"
              controlId="validationFormik102"
              className="position-relative"
            >
              <Form.Label></Form.Label>
              <DropdownButton
                id="dropdown-basic-button"
                title="Category ">
                  <Form.Control   onChange={(e)=>{
                  setCategory(e.target.value);
                
  
                    
  
                }}/>
                <Dropdown.Item href="#/action-1">Men</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Women</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Kids</Dropdown.Item>
              </DropdownButton>

              <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationFormikUsername2">
              <Form.Label>description</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  type="text"
                  placeholder="description"
                  aria-describedby="inputGroupPrepend"
                  name="description"
                  onChange={(e)=>{
                    setDescription(e.target.value);

                  }}
                  isInvalid={!!errors.description}
                />
                <Form.Control.Feedback type="invalid" tooltip>
                  {errors.description}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group
              as={Col}
              md="6"
              controlId="validationFormik103"
              className="position-relative"
            >
              <Form.Label>price</Form.Label>
              <Form.Control
                type="text"
                placeholder="price"
                onChange={(e)=>{
                  setPrice(e.target.value);

                }}
                isInvalid={!!errors.price}
              />

              <Form.Control.Feedback type="invalid" tooltip>
                {errors.price}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group
              as={Col}
              md="3"
              controlId="validationFormik104"
              className="position-relative"
            >
              <Form.Label>old-price</Form.Label>
              <Form.Control
                type="text"
                placeholder="old-price"
                name="old-price"
                onChange={(e)=>{
                  setOldprice(e.target.value);

                }}
                isInvalid={!!errors.old_price}
              />
              <Form.Control.Feedback type="invalid" tooltip>
                {errors.old_price}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group
              as={Col}
              md="3"
              controlId="validationFormik105"
              className="position-relative"
            ></Form.Group>
          </Row>
          <Form.Group className="position-relative mb-3">
          <Form.Group controlId="formFileLg" className="mb-3">
        <Form.Label>Image</Form.Label>
        <Form.Control
  type="file"
  onChange={(e) => {

    const files = Array.from(e.target.files);

      

    files.forEach((files) => {
      const reader = new FileReader();
      reader.onload = () => {
      };

      reader.readAsDataURL(files);

    });
    setImage(files)
  }}
  size="lg"
  multiple
/>

      </Form.Group>
          </Form.Group>
          <Form.Group className="position-relative mb-3">
            <Form.Check
              required
              name="terms"
              label="Agree to terms and conditions"
              onChange={handleChange}
              isInvalid={!!errors.terms}
              feedback={errors.terms}
              feedbackType="invalid"
              id="validationFormik106"
              feedbackTooltip
            />
          </Form.Group>
          <Button type="submit">Submit form</Button>
        </Form>
      )}
    </Formik>
  );
};
