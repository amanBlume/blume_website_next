"use client"
import React, { useState } from 'react'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'
import { Button } from './ui/button'
import ReactSelect from 'react-select'
import { Textarea } from './ui/textarea'

// Define the form data interface
interface ProfileFormData {
  title: string
  firstName: string
  lastName: string
  npiNumber: string
  gender: 'male' | 'female' | 'other' | ''
  personal_phone_number: string
  login_email_address: string
  headlines:string
  about_me:string
}

const options = [
  { value: 'lcpc', label: 'LCPC' },
  { value: 'arnp', label: 'ARNP' },
  { value: 'lep', label: 'LEP' }
]

// Define validation errors interface
interface ValidationErrors {
  title?: string
  firstName?: string
  lastName?: string
  npiNumber?: string
  gender?: string
  personal_phone_number?: string
  login_email_address?: string
  headlines?:string
  about_me?:string
}

// Component props interface
interface ProfileBasicProps {
  onSubmit?: (data: ProfileFormData) => void
  initialData?: Partial<ProfileFormData>
}

const ProfileBasic: React.FC<ProfileBasicProps> = ({ onSubmit, initialData }) => {
  const [formData, setFormData] = useState<ProfileFormData>({
    title: initialData?.title || '',
    firstName: initialData?.firstName || '',
    lastName: initialData?.lastName || '',
    npiNumber: initialData?.npiNumber || '',
    gender: initialData?.gender || '',
    personal_phone_number: initialData?.personal_phone_number || '',
    login_email_address: initialData?.login_email_address || '',
    headlines:initialData?.headlines || '',
    about_me:initialData?.about_me || ''
  })

  const [errors, setErrors] = useState<ValidationErrors>({})
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)

  const handleInputChange = (field: keyof ProfileFormData, value: string): void => {
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

  const validateForm = (): boolean => {
    const newErrors: ValidationErrors = {}
    if (!formData.title.trim()) newErrors.title = 'Title is required'
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required'
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required'
    if (!formData.npiNumber.trim()) {
      newErrors.npiNumber = 'NPI number is required'
    } else if (!/^\d{10}$/.test(formData.npiNumber)) {
      newErrors.npiNumber = 'NPI number must be exactly 10 digits'
    }
    if (!formData.gender) newErrors.gender = 'Gender is required'
    if (!formData.personal_phone_number) newErrors.personal_phone_number = 'Personal phone number is required'
    if (!formData.login_email_address) newErrors.login_email_address = 'Login Email is required'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()
    if (!validateForm()) return
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

  const handleSelectChange = (value: string): void => {
    handleInputChange('gender', value as ProfileFormData['gender'])
  }

  return (
    <Card className="w-full max-w-5xl mx-auto shadow-2xl border-gray-100 rounded-2xl p-6 bg-white">
      <CardHeader className="pb-6">
        <CardTitle className="text-2xl font-bold">Basic Profile</CardTitle>
        <CardDescription className="text-gray-500">
          Fill out your basic details to complete your profile.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-8 ">
          
          {/* Personal Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
            {/* Title */}
            <div className="flex flex-col gap-2">
              <Label className="font-medium">Title <span className="text-red-500">*</span></Label>
              <Input

                placeholder="Dr"
                value={formData.title}
                onChange={(e) => handleInputChange('title', e.target.value)}
                className= {errors.title ? 'border-red-500' : "border-gray-300" }
                disabled={isSubmitting}
              />
              {errors.title && <span className="text-red-500 text-sm">{errors.title}</span>}
            </div>

            {/* First Name */}
            <div className="flex flex-col gap-2">
              <Label className="font-medium">First Name <span className="text-red-500">*</span></Label>
              <Input
                placeholder="John"
                value={formData.firstName}
                onChange={(e) => handleInputChange('firstName', e.target.value)}
                className={errors.firstName ? 'border-red-500' : 'border-gray-300'}
                disabled={isSubmitting}
              />
              {errors.firstName && <span className="text-red-500 text-sm">{errors.firstName}</span>}
            </div>

            {/* Last Name */}
            <div className="flex flex-col gap-2">
              <Label className="font-medium">Last Name <span className="text-red-500">*</span></Label>
              <Input
                placeholder="Doe"
                value={formData.lastName}
                onChange={(e) => handleInputChange('lastName', e.target.value)}
                className={errors.lastName ? 'border-red-500' : 'border-gray-300'}
                disabled={isSubmitting}
              />
              {errors.lastName && <span className="text-red-500 text-sm">{errors.lastName}</span>}
            </div>
          </div>

          {/* NPI + Gender */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <Label className="font-medium">NPI Number <span className="text-red-500">*</span></Label>
              <Input
                type="number"
                placeholder="1234567890"
                value={formData.npiNumber}
                onChange={(e) => handleInputChange('npiNumber', e.target.value)}
                className={errors.npiNumber ? 'border-red-500' : 'border-gray-300'}
                disabled={isSubmitting}
                maxLength={10}
              />
              {errors.npiNumber && <span className="text-red-500 text-sm">{errors.npiNumber}</span>}
            </div>

            <div className="flex flex-col gap-2">
              <Label className="font-medium">Gender <span className="text-red-500">*</span></Label>
              <Select value={formData.gender} onValueChange={handleSelectChange} disabled={isSubmitting}>
                <SelectTrigger className={errors.gender ? 'border-red-500' : 'border-gray-300'}>
                  <SelectValue placeholder="Select Gender" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
              {errors.gender && <span className="text-red-500 text-sm">{errors.gender}</span>}
            </div>
          </div>

          {/* Credentials */}
          <div>
            <Label className="font-medium">Credentials <span className="text-red-500">*</span></Label>
            <ReactSelect isMulti options={options} className="mt-1" />
          </div>

          {/* Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <Label className="font-medium">Personal Phone Number <span className="text-red-500">*</span></Label>
              <Input
                placeholder="9898989898"
                value={formData.personal_phone_number}
                onChange={(e) => handleInputChange('personal_phone_number', e.target.value)}
                className={errors.personal_phone_number ? 'border-red-500' : 'border-gray-300'}
                disabled={isSubmitting}
              />
              {errors.personal_phone_number && <span className="text-red-500 text-sm">{errors.personal_phone_number}</span>}
            </div>

            <div className="flex flex-col gap-2">
              <Label className="font-medium">Login Email Address <span className="text-red-500">*</span></Label>
              <Input
                placeholder="johnDoe@email.com"
                value={formData.login_email_address}
                onChange={(e) => handleInputChange('login_email_address', e.target.value)}
                className={errors.login_email_address ? 'border-red-500' : 'border-gray-300'}
                disabled={isSubmitting}
              />
              {errors.login_email_address && <span className="text-red-500 text-sm">{errors.login_email_address}</span>}
            </div>
          </div>

          {/* Practice Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <Label className="font-medium">Practice Phone Number <span className="text-red-500">*</span></Label>
              <Input
                placeholder="9898989898"
                value={formData.personal_phone_number}
                onChange={(e) => handleInputChange('personal_phone_number', e.target.value)}
                className={errors.personal_phone_number ? 'border-red-500' : 'border-gray-300'}
                disabled={isSubmitting}
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label className="font-medium">Practice Email Address <span className="text-red-500">*</span></Label>
              <Input
                placeholder="practice@email.com"
                value={formData.login_email_address}
                onChange={(e) => handleInputChange('login_email_address', e.target.value)}
                className={errors.login_email_address ? 'border-red-500' : 'border-gray-300'}
                disabled={isSubmitting}
              />
            </div>
          </div>
          <div className='flex'>
            <div className="flex flex-col gap-2">
                <Label className="font-medium">Years of Experience in healthcare<span className="text-red-500">*</span></Label>
                <Input
                  placeholder="9898989898"
                  value={formData.personal_phone_number}
                  onChange={(e) => handleInputChange('personal_phone_number', e.target.value)}
                  className={errors.personal_phone_number ? 'border-red-500' : 'border-gray-300'}
                  disabled={isSubmitting}
                />
              </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="flex flex-col gap-2">
              <Label className="font-medium">Headlines</Label>
              <Textarea placeholder='Headlines' className='resize-none border-gray-300 max-width: 400px; min-width: 200px;' />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="flex flex-col gap-2">
              <Label className="font-medium">About me</Label>
              <Textarea placeholder='About me' className='resize-none border-gray-300' />
            </div>
          </div>

          {/* Submit */}
          <div className="flex justify-end">
            <Button type="submit" className="px-8 py-2 border shadow-2xl border-gray-300" disabled={isSubmitting}>
              {isSubmitting ? 'Saving...' : 'Next'}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}

export default ProfileBasic
