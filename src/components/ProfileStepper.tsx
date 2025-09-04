// components/ProfileStepper.tsx
"use client"
import React, { useState } from 'react'
import ProfileBasic from './ProfileBasic'
import { CheckCircle } from 'lucide-react'
import LicenseDetails from './LicenseDetails'

interface ProfileData {
  basic?: any
  license?: any
  experience?: any
  verification?: any
}

const ProfileStepper: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0)
  const [completedSteps, setCompletedSteps] = useState<Set<number>>(new Set())
  const [profileData, setProfileData] = useState<ProfileData>({})

  // Define your steps
  const steps = [
    { id: 0, title: 'Basic Info', shortTitle: 'Basic' },
    { id: 1, title: 'License', shortTitle: 'License' },
    { id: 2, title: 'Experience', shortTitle: 'Experience' },
    { id: 3, title: 'Verification', shortTitle: 'Verification' }
  ]

  const handleNextStep = (stepData: any) => {
    const stepKeys = ['basic', 'license', 'experience', 'verification']
    setProfileData(prev => ({
      ...prev,
      [stepKeys[currentStep]]: stepData
    }))
    
    // Mark current step as completed
    setCompletedSteps(prev => new Set([...prev, currentStep]))
    
    setCurrentStep(prev => prev + 1)
  }

  const handlePreviousStep = () => {
    setCurrentStep(prev => Math.max(0, prev - 1))
  }

  const handleTabClick = (stepIndex: number) => {
    // Allow navigation to completed steps or the next immediate step
    if (completedSteps.has(stepIndex) || stepIndex <= Math.max(...completedSteps, -1) + 1) {
      setCurrentStep(stepIndex)
    }
  }

  // Tab-Style Progress Tracker
  const TabProgressTracker = () => {
    return (
    // Inside TabProgressTracker
    <div className="w-full max-w-5xl mx-auto mb-8">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        {/* Make it scrollable horizontally on small screens */}
        <div className="flex flex-col sm:flex-row overflow-x-auto">
          {steps.map((step, index) => {
            const isActive = index === currentStep
            const isCompleted = completedSteps.has(index)
            const isAccessible = completedSteps.has(index) || index <= Math.max(...completedSteps, -1) + 1

            return (
              <button
                key={step.id}
                onClick={() => handleTabClick(index)}
                disabled={!isAccessible}
                className={`
                  flex-1 min-w-[120px] sm:min-w-0 px-4 py-3 sm:px-6 sm:py-4 
                  text-center border-b sm:border-b-0 sm:border-r border-gray-200 last:border-0 
                  transition-all duration-200 relative
                  ${isActive 
                    ? 'bg-blue-50 text-blue-600 font-medium' 
                    : isCompleted
                    ? 'bg-green-50 text-green-600 hover:bg-green-100'
                    : isAccessible
                    ? 'text-gray-600 hover:bg-gray-50'
                    : 'text-gray-400 cursor-not-allowed'
                  }
                `}
              >
                <div className="flex items-center justify-center space-x-2">
                  {/* Step indicator */}
                  <div className={`
                    w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold
                    ${isActive 
                      ? 'bg-blue-500 text-white' 
                      : isCompleted
                      ? 'bg-green-500 text-white'
                      : isAccessible
                      ? 'bg-gray-200 text-gray-600'
                      : 'bg-gray-100 text-gray-400'
                    }
                  `}>
                    {isCompleted ? (
                      <CheckCircle className="w-4 h-4" />
                    ) : (
                      index + 1
                    )}
                  </div>

                  {/* Step title */}
                  <span className="text-xs sm:text-sm font-medium">
                    {step.shortTitle}
                  </span>
                </div>

                {/* Active step underline (only on desktop) */}
                {isActive && (
                  <div className="hidden sm:block absolute bottom-0 left-0 right-0 h-1 bg-blue-500"></div>
                )}
              </button>
            )
          })}
        </div>
      </div>

      {/* Current step info */}
      <div className="text-center mt-4">
        <h3 className="text-lg font-semibold text-gray-900">
          {steps[currentStep]?.title}
        </h3>
        <p className="text-sm text-gray-500 mt-1">
          Step {currentStep + 1} of {steps.length}
        </p>
        <p className="text-xs sm:text-sm mt-1">
          <span><span className='text-red-600'>*</span> Indicates required fields</span>
        </p>
      </div>
    </div>

    )
  }

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <ProfileBasic 
            onSubmit={handleNextStep}
            initialData={profileData.basic}
          />
        )
      case 1:
        return (
            <LicenseDetails />
        )
      case 2:
        return (
          <div className="w-full max-w-5xl mx-auto shadow-2xl border-gray-100 rounded-2xl p-6 bg-white">
            <div className="pb-6">
              <h2 className="text-2xl font-bold">Work Experience</h2>
              <p className="text-gray-500 mt-2">Tell us about your professional experience.</p>
            </div>
            
            <div className="space-y-6">
              <p>Experience form will go here...</p>
            </div>
            
            <div className="flex justify-between mt-8">
              <button 
                onClick={handlePreviousStep}
                className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Previous
              </button>
              <button 
                onClick={() => handleNextStep({})}
                className="px-8 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                Next
              </button>
            </div>
          </div>
        )
      case 3:
        return (
          <div className="w-full max-w-5xl mx-auto shadow-2xl border-gray-100 rounded-2xl p-6 bg-white">
            <div className="pb-6">
              <h2 className="text-2xl font-bold">Document Verification</h2>
              <p className="text-gray-500 mt-2">Upload required documents for verification.</p>
            </div>
            
            <div className="space-y-6">
              <p>Verification form will go here...</p>
            </div>
            
            <div className="flex justify-between mt-8">
              <button 
                onClick={handlePreviousStep}
                className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Previous
              </button>
              <button 
                onClick={() => {
                  setCompletedSteps(prev => new Set([...prev, currentStep]))
                  console.log('Final submission', profileData)
                }}
                className="px-8 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
              >
                Complete Profile
              </button>
            </div>
          </div>
        )
      default:
        return (
          <div className="w-full max-w-5xl mx-auto shadow-2xl border-gray-100 rounded-2xl p-6 bg-white text-center">
            <div className="py-12">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Profile Complete!</h2>
              <p className="text-gray-600">Your profile has been successfully created.</p>
            </div>
          </div>
        )
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="flex flex-col items-center justify-center px-4">
        <TabProgressTracker />
        {renderCurrentStep()}
      </div>
    </div>
  )
}

export default ProfileStepper