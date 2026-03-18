"use client";

import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Select, SelectContent , SelectValue  , SelectTrigger, SelectItem} from './ui/select'


interface Practice_License{
    state_of_license:string,
    license_number:string,
    expiration_date:Date,
    license_name:string,
    photo:string
}

interface Practice_License_validation{
    state_of_license?:string,
    license_number?:string,
    expiration_date?:string,
    license_name?:string,
    photo?:string
}

interface Practive_license_Props{
    onSubmit?:(data:Practice_License)=> void
    initialData?:Partial<Practice_License>
}

const states = [
  { value: 'al', label: 'Alabama' },
  { value: 'ak', label: 'Alaska' },
  { value: 'az', label: 'Arizona' },
  { value: 'ar', label: 'Arkansas' },
  { value: 'ca', label: 'California' },
  { value: 'co', label: 'Colorado' },
  { value: 'ct', label: 'Connecticut' },
  { value: 'de', label: 'Delaware' },
  { value: 'fl', label: 'Florida' },
  { value: 'ga', label: 'Georgia' },
  { value: 'hi', label: 'Hawaii' },
  { value: 'id', label: 'Idaho' },
  { value: 'il', label: 'Illinois' },
  { value: 'in', label: 'Indiana' },
  { value: 'ia', label: 'Iowa' },
  { value: 'ks', label: 'Kansas' },
  { value: 'ky', label: 'Kentucky' },
  { value: 'la', label: 'Louisiana' },
  { value: 'me', label: 'Maine' },
  { value: 'md', label: 'Maryland' },
  { value: 'ma', label: 'Massachusetts' },
  { value: 'mi', label: 'Michigan' },
  { value: 'mn', label: 'Minnesota' },
  { value: 'ms', label: 'Mississippi' },
  { value: 'mo', label: 'Missouri' },
  { value: 'mt', label: 'Montana' },
  { value: 'ne', label: 'Nebraska' },
  { value: 'nv', label: 'Nevada' },
  { value: 'nh', label: 'New Hampshire' },
  { value: 'nj', label: 'New Jersey' },
  { value: 'nm', label: 'New Mexico' },
  { value: 'ny', label: 'New York' },
  { value: 'nc', label: 'North Carolina' },
  { value: 'nd', label: 'North Dakota' },
  { value: 'oh', label: 'Ohio' },
  { value: 'ok', label: 'Oklahoma' },
  { value: 'or', label: 'Oregon' },
  { value: 'pa', label: 'Pennsylvania' },
  { value: 'ri', label: 'Rhode Island' },
  { value: 'sc', label: 'South Carolina' },
  { value: 'sd', label: 'South Dakota' },
  { value: 'tn', label: 'Tennessee' },
  { value: 'tx', label: 'Texas' },
  { value: 'ut', label: 'Utah' },
  { value: 'vt', label: 'Vermont' },
  { value: 'va', label: 'Virginia' },
  { value: 'wa', label: 'Washington' },
  { value: 'wv', label: 'West Virginia' },
  { value: 'wi', label: 'Wisconsin' },
  { value: 'wy', label: 'Wyoming' }
]



const LicenseDetails : React.FC<Practive_license_Props> = ({onSubmit , initialData}) => {
    const [formData , setFormData] = useState<Practice_License>({
        state_of_license:initialData?.state_of_license || '',
        license_name:initialData?.license_name || '',
        license_number:initialData?.license_number || '',
        expiration_date: initialData?.expiration_date || new Date("1900-01-01"),
        photo:initialData?.photo || ''
    })

    const [errors , setErrors] = useState<Practice_License_validation>({})
    const [isSubmitting , setIsSubmitting] = useState<boolean>(false)
    const handleInputChange = (field: keyof Practice_License, value: string): void => {
    setFormData(prev => ({
        ...prev,
        [field]: value
        }))
        if (errors[field]) {
        setErrors(prev => ({
            ...prev,
            [field]: undefined
        }))
        }
    }

    const validationForm = ():boolean=>{
        const newErrors:Practice_License_validation = {}
        if(!formData.license_name.trim()) newErrors.license_name = "Name must be present"
        if(!formData.license_number.trim()) newErrors.license_number = "License number must be present"
        if(!formData.state_of_license.trim()) newErrors.state_of_license = "Selected State must be valid"
        if (formData.expiration_date ==  new Date("1900-01-01")) newErrors.expiration_date = 'date must valid'
        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()
    if (!validationForm()) return
    setIsSubmitting(true)
    try {
        await onSubmit?.(formData)
        console.log('Form submitted successfully:', formData)
    } catch (error) {
        console.error('Error submitting form:', error)
    } finally {
        setIsSubmitting(false)
    }
    }






  return (
    <Card className="w-full max-w-5xl mx-auto shadow-2xl border-gray-100 rounded-2xl p-6 bg-white">
        <div>
            <CardHeader className="pb-6">
                <CardTitle className="text-2xl font-bold">License</CardTitle>
                <CardDescription className="text-gray-500">
                Fill out your basic details to complete your profile.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit} className="space-y-8">
                    {/* State of License */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="flex flex-col gap-2">
                        <Label className="font-medium">
                            State of License <span className="text-red-500">*</span>
                        </Label>
                        <Select
                            value={formData.state_of_license}
                            onValueChange={(val) => handleInputChange('state_of_license', val)}
                            disabled={isSubmitting}
                        >
                            <SelectTrigger
                            className={errors.state_of_license ? 'border-red-500' : 'border-gray-300'}
                            >
                            <SelectValue placeholder="Select State" />
                            </SelectTrigger>
                            <SelectContent className="bg-white">
                            {states.map((ele) => (
                                <SelectItem key={ele.value} value={ele.value}>
                                {ele.label}
                                </SelectItem>
                            ))}
                            </SelectContent>
                        </Select>
                        {errors.state_of_license && (
                            <span className="text-red-500 text-sm">{errors.state_of_license}</span>
                        )}
                        </div>
                    </div>

                    {/* License Number & Expiration Date */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="flex flex-col gap-2">
                        <Label className="font-medium">
                            License number <span className="text-red-500">*</span>
                        </Label>
                        <Input
                            placeholder="Enter license number"
                            value={formData.license_number}
                            onChange={(e) => handleInputChange('license_number', e.target.value)}
                            className={errors.license_number ? 'border-red-500' : 'border-gray-300'}
                            disabled={isSubmitting}
                        />
                        {errors.license_number && (
                            <span className="text-red-500 text-sm">{errors.license_number}</span>
                        )}
                        </div>

                        <div className="flex flex-col gap-2">
                            <Label className="font-medium">
                                Expiration date <span className="text-red-500">*</span>
                            </Label>
                            <Input
                                type="date"
                                value={formData.expiration_date ? String(formData.expiration_date).split('T')[0] : ''}
                                onChange={(e) => handleInputChange('expiration_date', e.target.value)}
                                className={errors.expiration_date ? 'border-red-500' : 'border-gray-300'}
                                disabled={isSubmitting}
                            />
                            {errors.expiration_date && (
                                <span className="text-red-500 text-sm">{errors.expiration_date}</span>
                            )}
                        </div>
                    </div>

                    {/* License Name */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="flex flex-col gap-2">
                        <Label className="font-medium">
                            License name <span className="text-red-500">*</span>
                        </Label>
                        <Input
                            placeholder="Enter license name"
                            value={formData.license_name}
                            onChange={(e) => handleInputChange('license_name', e.target.value)}
                            className={errors.license_name ? 'border-red-500' : 'border-gray-300'}
                            disabled={isSubmitting}
                        />
                        {errors.license_name && (
                            <span className="text-red-500 text-sm">{errors.license_name}</span>
                        )}
                        </div>
                    </div>
                    </form>

            </CardContent>
        </div>
        <div className='border-t-2 pt-5'>
            <CardHeader className="pb-6">
                <CardTitle className="text-2xl font-bold">License</CardTitle>
                <CardDescription className="text-gray-500">
                Fill out your basic details to complete your profile.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit} className='space-y-8'>
                    
                </form>
            </CardContent>
        </div>
    </Card>
  )
}

export default LicenseDetails