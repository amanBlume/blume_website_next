"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useRouter } from "next/navigation"
import CalendlyEmbed from "./CalendlyEmbed"

const credentials = [
  "PMHNP-BC",
  "FNP-BC", 
  "FNP-C",
  "DNP",
  "PhD",
  "LCSW",
  "LMFT",
  "LPC",
  "MD",
  "DO",
  "Other"
]

const states = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", 
  "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho",
  "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana",
  "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", 
  "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada",
  "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina",
  "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania",
  "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas",
  "Utah", "Vermont", "Virginia", "Washington", "West Virginia", 
  "Wisconsin", "Wyoming", "District of Columbia", "American Samoa",
  "Guam", "Northern Mariana Islands", "Puerto Rico", 
  "United States Minor Outlying Islands", "Virgin Islands, U.S."
]

export default function BlumeHealthForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    credentials: [] as string[],
    states: [] as string[],
    newClients: "",
    providers: ""
  })
  const router = useRouter()
  const [showAllCredentials, setShowAllCredentials] = useState(false)
  const [showAllStates, setShowAllStates] = useState(false)
  const [showCalendly, setShowCalendly] = useState(false)

  const handleCredentialChange = (credential: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      credentials: checked 
        ? [...prev.credentials, credential]
        : prev.credentials.filter(c => c !== credential)
    }))
  }

  const handleStateChange = (state: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      states: checked 
        ? [...prev.states, state]
        : prev.states.filter(s => s !== state)
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setShowCalendly(true)
  }

  const displayedCredentials = showAllCredentials ? credentials : credentials.slice(0, 6)
  const displayedStates = showAllStates ? states : states.slice(0, 12)
   if (showCalendly) {
    return (
      <div>
        <CalendlyEmbed />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <Card className="w-full bg-white shadow-2xl border-0 overflow-hidden">
          <CardHeader className="text-center pb-8 bg-gradient-to-r from-white to-gray-50/50">
            <CardTitle className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-coral-500 to-coral-600 bg-clip-text text-transparent">
              Step 1: Please fill in a few details
            </CardTitle>
          </CardHeader>
          
          <CardContent className="space-y-8 bg-white p-8 sm:p-10">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Name Fields */}
              <div className="space-y-4">
                <Label htmlFor="name" className="text-base font-semibold text-gray-800">
                  Name <span className="text-red-500">*</span>
                </Label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Input
                      id="firstName"
                      placeholder="First"
                      value={formData.firstName}
                      onChange={(e) => setFormData(prev => ({...prev, firstName: e.target.value}))}
                      className="w-full border-gray-200 shadow-sm focus:shadow-md focus:border-coral-300 focus:ring-coral-300 transition-all duration-200 rounded-lg"
                      required
                    />
                  </div>
                  <div>
                    <Input
                      id="lastName"
                      placeholder="Last"
                      value={formData.lastName}
                      onChange={(e) => setFormData(prev => ({...prev, lastName: e.target.value}))}
                      className="w-full border-gray-200 shadow-sm focus:shadow-md focus:border-coral-300 focus:ring-coral-300 transition-all duration-200 rounded-lg"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-base font-semibold text-gray-800">
                  Email Address <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({...prev, email: e.target.value}))}
                  className="w-full border-gray-200 shadow-sm focus:shadow-md focus:border-coral-300 focus:ring-coral-300 transition-all duration-200 rounded-lg"
                  required
                />
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-base font-semibold text-gray-800">
                  Phone Number <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData(prev => ({...prev, phone: e.target.value}))}
                  className="w-full border-gray-200 shadow-sm focus:shadow-md focus:border-coral-300 focus:ring-coral-300 transition-all duration-200 rounded-lg"
                  required
                />
              </div>

              {/* Credentials */}
              <div className="space-y-4">
                <Label className="text-base font-semibold text-gray-800">
                  Credentials that apply to you <span className="text-red-500">*</span>
                </Label>
                <div className="bg-gray-50/50 rounded-xl p-6 shadow-inner border border-gray-100">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {displayedCredentials.map((credential) => (
                      <div key={credential} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-white/60 transition-colors duration-200">
                        <Checkbox
                          id={credential}
                          checked={formData.credentials.includes(credential)}
                          onCheckedChange={(checked) => 
                            handleCredentialChange(credential, checked as boolean)
                          }
                          className="data-[state=checked]:bg-coral-500 data-[state=checked]:border-coral-500"
                        />
                        <Label htmlFor={credential} className="text-sm font-medium cursor-pointer text-gray-700">
                          {credential}
                        </Label>
                      </div>
                    ))}
                  </div>
                  {!showAllCredentials && (
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => setShowAllCredentials(true)}
                      className="mt-4 text-coral-500 hover:text-coral-600 hover:bg-coral-50"
                    >
                      Show more credentials
                    </Button>
                  )}
                </div>
                {formData.credentials.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {formData.credentials.map((credential) => (
                      <Badge key={credential} variant="secondary" className="bg-coral-100 text-coral-700 border-coral-200 shadow-sm">
                        {credential}
                      </Badge>
                    ))}
                  </div>
                )}
              </div>

              {/* States */}
              <div className="space-y-4">
                <Label className="text-base font-semibold text-gray-800">
                  States you are licensed to work in <span className="text-red-500">*</span>
                </Label>
                <div className="bg-gray-50/50 rounded-xl p-6 shadow-inner border border-gray-100">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-h-64 overflow-y-auto custom-scrollbar">
                    {displayedStates.map((state) => (
                      <div key={state} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-white/60 transition-colors duration-200">
                        <Checkbox
                          id={state}
                          checked={formData.states.includes(state)}
                          onCheckedChange={(checked) => 
                            handleStateChange(state, checked as boolean)
                          }
                          className="data-[state=checked]:bg-coral-500 data-[state=checked]:border-coral-500"
                        />
                        <Label htmlFor={state} className="text-sm font-medium cursor-pointer text-gray-700">
                          {state}
                        </Label>
                      </div>
                    ))}
                  </div>
                  {!showAllStates && (
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => setShowAllStates(true)}
                      className="mt-4 text-coral-500 hover:text-coral-600 hover:bg-coral-50"
                    >
                      Show all states
                    </Button>
                  )}
                </div>
                {formData.states.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {formData.states.slice(0, 5).map((state) => (
                      <Badge key={state} variant="secondary" className="bg-coral-100 text-coral-700 border-coral-200 shadow-sm">
                        {state}
                      </Badge>
                    ))}
                    {formData.states.length > 5 && (
                      <Badge variant="secondary" className="bg-gray-100 text-gray-700 border-gray-200 shadow-sm">
                        +{formData.states.length - 5} more
                      </Badge>
                    )}
                  </div>
                )}
              </div>

              {/* New Clients */}
              <div className="space-y-4">
                <Label className="text-base font-semibold text-gray-800">
                  Number of new clients are you looking for in a month <span className="text-red-500">*</span>
                </Label>
                <div className="bg-gray-50/50 rounded-xl p-6 shadow-inner border border-gray-100">
                  <RadioGroup
                    value={formData.newClients}
                    onValueChange={(value) => setFormData(prev => ({...prev, newClients: value}))}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                  >
                    {["1 - 10", "11 - 50", "51 - 100", "100+"].map((option) => (
                      <div key={option} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/60 transition-colors duration-200">
                        <RadioGroupItem 
                          value={option} 
                          id={`clients-${option}`}
                          className="data-[state=checked]:bg-coral-500 data-[state=checked]:border-coral-500"
                        />
                        <Label htmlFor={`clients-${option}`} className="font-medium cursor-pointer text-gray-700">
                          {option}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
              </div>

              {/* Providers */}
              <div className="space-y-4">
                <Label className="text-base font-semibold text-gray-800">
                  Number of providers that work in your practice <span className="text-red-500">*</span>
                </Label>
                <div className="bg-gray-50/50 rounded-xl p-6 shadow-inner border border-gray-100">
                  <RadioGroup
                    value={formData.providers}
                    onValueChange={(value) => setFormData(prev => ({...prev, providers: value}))}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                  >
                    {["1", "2 - 5", "6 - 25", "26 - 50", "50+"].map((option) => (
                      <div key={option} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/60 transition-colors duration-200">
                        <RadioGroupItem 
                          value={option} 
                          id={`providers-${option}`}
                          className="data-[state=checked]:bg-coral-500 data-[state=checked]:border-coral-500"
                        />
                        <Label htmlFor={`providers-${option}`} className="font-medium cursor-pointer text-gray-700">
                          {option}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-8 flex justify-center sm:justify-start">
                <Button 
                  type="submit" 
                  className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 px-12 py-3 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
                >
                  Submit
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}