import React,{useState} from 'react'
import './form.css'

const Form = ({locatFinder}) => {
    const [formData, setFormData] = useState({
        lat:   locatFinder.coordinates.lat,
        lng:    locatFinder.coordinates.lng,
        propertyType: "",
        propertyDescription: ""
    })


    const handleChange = (e)=>{
        const {name, value, type, checked} = e.target
        setFormData(prevData =>{
           return{
               ...prevData,
               [name]: type === "checkedbox" ? checked : value 
           }
        })

    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log(formData)
        setFormData(formData)
    }

  return (
    <form className="container" onSubmit={handleSubmit}>
        <div className="form-input">
            <select 
                onChange={handleChange}
                value={formData.propertyType}
                name="propertyType"
                required={true}
            >
                <option value="">--Select property type--</option>
                <option value="Plaza">Plaza</option>
                <option value="Hospital">Hospital</option>
                <option value="Tech-firm">Tech firm</option>
                <option value="Hotels">Hotels</option>
                <option value="Rented-residents">Rented residencial</option>
            </select>
        </div>
        <div className="form-input">
            <textarea 
                placeholder="Short description of property"
                onChange={handleChange}
                value={formData.propertyDescription}
                name="propertyDescription"
                required={true}
            />
        </div>      
        <div className="form-input">
            <button type="submit">Submit</button>
        </div>
    </form>
  )
}

export default Form


{/* <div><div>
  <label htmlFor="my-select">Choose an option:</label>
  <select id="my-select" value={selectedOption} onChange={handleChange}>
  <select id="my-select">
  <option value="">--Choose property type--</option>
  <option value="plaza">Plaza</option>
  <option value="hospital">Hospital</option>
  <option value="tech-firm">Technology</option>
</select>
</div>
<div>
<label htmlFor="description">Description</label> 
<textarea />
</div>
<div>
    <button>Submitte</button>
</div>
</div> */}