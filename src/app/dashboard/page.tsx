"use client";

import React, { useState } from 'react';
import { Users, Calendar, TrendingUp, DollarSign,Activity,Clock,Plus,ArrowUpRight,ChevronRight,Check,User,CreditCard,Settings,LucideIcon,Menu,X,Phone,Mail} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

interface Stage {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
  buttonText: string;
  completed: boolean;
}

const DashboardPage: React.FC = () => {
  const router = useRouter();
  
  // Stage management with proper typing
  const [currentStage, setCurrentStage] = useState<number>(1);
  const [completedStages, setCompletedStages] = useState<number[]>([]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const stages: Stage[] = [
    {
      id: 1,
      title: "Make Blume Profile",
      description: "Let us know more about yourself.",
      icon: User,
      buttonText: "Setup Now",
      completed: false
    },
    {
      id: 2,
      title: "Choose Plan",
      description: "Select the perfect plan for your needs.",
      icon: CreditCard,
      buttonText: "Choose Plan",
      completed: false
    },
    {
      id: 3,
      title: "Choose Channels",
      description: "Select your preferred communication channels.",
      icon: Settings,
      buttonText: "Setup Channels",
      completed: false
    }
  ];

  // Handle stage completion with proper typing
  const handleStageClick = (stageId: number): void => {
    navigateToStage(stageId)
    // if (stageId <= currentStage) {
    //   if (!completedStages.includes(stageId)) {
    //     setCompletedStages([...completedStages, stageId]);
    //     if (stageId === currentStage && currentStage < 3) {
    //       setCurrentStage(currentStage + 1);
    //     }
    //   }
    //   // Close mobile menu after selection
    //   setIsMobileMenuOpen(false);
    // }
  };

  const navigateToStage = (stageId: number): void => {
    switch (stageId) {
      case 1:
        router.push('/dashboard/onboarding/profile');
        break;
      case 2:
        router.push('/dashboard/onboarding/plans');
        break;
      case 3:
        router.push('/dashboard/onboarding/channels');
        break;
      default:
        router.push('/dashboard');
    }
  };

  const getCurrentStageInfo = (): Stage => {
    const activeStage = stages.find((stage: Stage) => stage.id === currentStage);
    return activeStage || stages[0];
  };

  const isStageCompleted = (stageId: number): boolean => completedStages.includes(stageId);
  const isStageActive = (stageId: number): boolean => stageId === currentStage;
  const isStageAccessible = (stageId: number): boolean => stageId <= currentStage;

  const getProgressPercentage = (): number => {
    return (completedStages.length / stages.length) * 100;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <div className='flex flex-col h-screen w-full overflow-hidden'>
        {/* Header */}
        <div className="bg-white/80 backdrop-blur-sm shadow-sm border-b border-slate-200 px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <h1 className="text-xl sm:text-2xl font-bold text-slate-900">Welcome to Blume Health</h1>
              <p className="text-slate-600 text-sm sm:text-base mt-1 hidden sm:block">Complete your onboarding journey</p>
            </div>
            
            {/* Progress Bar - Mobile */}
            <div className="flex items-center space-x-3 sm:hidden">
              <div className="w-16 h-2 bg-slate-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-coral-400 to-coral-600 transition-all duration-500 ease-out"
                  style={{ width: `${getProgressPercentage()}%` }}
                />
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="p-2"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>
          
          {/* Progress Bar - Desktop */}
          <div className="hidden sm:flex items-center mt-4 space-x-4">
            <div className="flex-1 h-2 bg-slate-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-coral-400 to-coral-600 transition-all duration-500 ease-out"
                style={{ width: `${getProgressPercentage()}%` }}
              />
            </div>
            <span className="text-sm text-slate-600 font-medium">
              {completedStages.length} of {stages.length} completed
            </span>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm sm:hidden">
            <div className="absolute top-0 left-0 right-0 bg-white shadow-xl border-b">
              <div className="p-4">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-semibold text-slate-800">Getting Started</h2>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="p-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
                
                <div className="space-y-2">
                  {stages.map((stage: Stage) => {
                    const Icon: LucideIcon = stage.icon;
                    const completed: boolean = isStageCompleted(stage.id);
                    const active: boolean = isStageActive(stage.id);
                    const accessible: boolean = isStageAccessible(stage.id);
                    
                    return (
                      <div
                        key={stage.id}
                        className={`flex items-center space-x-3 p-3 rounded-xl transition-all cursor-pointer ${
                          active 
                            ? 'bg-coral-50 border border-coral-200' 
                            : completed 
                            ? 'bg-emerald-50 border border-emerald-200' 
                            : accessible
                            ? 'hover:bg-slate-50 border border-slate-200'
                            : 'opacity-50 cursor-not-allowed border border-slate-100'
                        }`}
                        onClick={() => accessible && handleStageClick(stage.id)}
                      >
                        <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
                          completed 
                            ? 'bg-emerald-500 text-white' 
                            : active 
                            ? 'bg-coral-500 text-white' 
                            : 'bg-slate-200 text-slate-600'
                        }`}>
                          {completed ? (
                            <Check className="w-4 h-4" />
                          ) : (
                            <Icon className="w-4 h-4" />
                          )}
                        </div>
                        
                        <div className="flex-1">
                          <div className={`font-medium text-sm ${
                            completed 
                              ? 'line-through text-emerald-600' 
                              : active 
                              ? 'text-coral-600' 
                              : 'text-slate-700'
                          }`}>
                            {stage.id}. {stage.title}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Main Content */}
        <div className='flex flex-1 overflow-hidden'>
          {/* Left Side - Stages List (Desktop only) */}
          <div className='hidden sm:flex flex-col justify-center p-6 lg:p-10 bg-white/50 backdrop-blur-sm border-r border-slate-200 w-80 lg:w-96'>
            <div className="space-y-3">
              <h2 className="text-lg font-semibold text-slate-800 mb-6">Getting Started</h2>
              
              {stages.map((stage: Stage, index: number) => {
                const Icon: LucideIcon = stage.icon;
                const completed: boolean = isStageCompleted(stage.id);
                const active: boolean = isStageActive(stage.id);
                const accessible: boolean = isStageAccessible(stage.id);
                
                return (
                  <div
                    key={stage.id}
                    className={`flex items-center space-x-4 p-4 rounded-2xl transition-all duration-200 cursor-pointer ${
                      active 
                        ? 'bg-coral-50 border-2 border-coral-200 shadow-sm' 
                        : completed 
                        ? 'bg-emerald-50 border border-emerald-200' 
                        : accessible
                        ? 'hover:bg-slate-50 border border-slate-200 hover:shadow-sm'
                        : 'opacity-50 cursor-not-allowed border border-slate-100'
                    }`}
                    onClick={() => accessible && handleStageClick(stage.id)}
                  >
                    <div className={`flex items-center justify-center w-12 h-12 rounded-full ${
                      completed 
                        ? 'bg-emerald-500 text-white shadow-md' 
                        : active 
                        ? 'bg-coral-500 text-white shadow-md' 
                        : 'bg-slate-200 text-slate-600'
                    }`}>
                      {completed ? (
                        <Check className="w-5 h-5" />
                      ) : (
                        <Icon className="w-5 h-5" />
                      )}
                    </div>
                    
                    <div className="flex-1">
                      <div className={`font-semibold ${
                        completed 
                          ? 'line-through text-emerald-600' 
                          : active 
                          ? 'text-coral-600' 
                          : 'text-slate-700'
                      }`}>
                        {stage.id}. {stage.title}
                      </div>
                      <div className="text-sm text-slate-500 mt-1">
                        {stage.description.split('.')[0]}...
                      </div>
                    </div>
                    
                    {active && (
                      <ChevronRight className="w-5 h-5 text-coral-500" />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Right Side - Active Stage Details */}
          <div className='flex flex-1 flex-col justify-center items-center p-4 sm:p-6 lg:p-10 bg-gradient-to-br from-white to-slate-50'>
            {currentStage <= 3 ? (
              <div className="text-center max-w-lg w-full">
                <div className="mb-8">
                  {React.createElement(getCurrentStageInfo().icon, {
                    className: "w-16 h-16 sm:w-20 sm:h-20 mx-auto text-coral-500 mb-6"
                  })}
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                    {getCurrentStageInfo().title}
                  </h3>
                  <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                    {getCurrentStageInfo().description}
                  </p>
                </div>
                
                <Button 
                  className="bg-gradient-to-r from-coral-500 to-coral-600 hover:from-coral-600 hover:to-coral-700 text-white px-8 py-3 text-base sm:text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 w-full sm:w-auto"
                  onClick={() => handleStageClick(currentStage)}
                >
                  {getCurrentStageInfo().buttonText}
                  <ArrowUpRight className="w-5 h-5 ml-2" />
                </Button>
                
                {/* Mobile stage indicator */}
                <div className="sm:hidden mt-6 text-sm text-slate-500">
                  Step {currentStage} of {stages.length}
                </div>
              </div>
            ) : (
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-emerald-100 rounded-full flex items-center justify-center">
                  <Check className="w-10 h-10 text-emerald-600" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                  All Set! 🎉
                </h3>
                <p className="text-slate-600 text-base sm:text-lg">
                  You've completed your onboarding journey.
                </p>
              </div>
            )}
          </div>
        </div>
        
        {/* Bottom Section - Help */}
        <div className='bg-white/80 backdrop-blur-sm border-t border-slate-200 p-4 sm:p-6'>
          <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4'>
            <div className='flex flex-col'>
              <span className="text-sm text-slate-500">Need help?</span>
              <div className="flex items-center mt-1 gap-4">
                <div className="flex items-center">
                  <Mail className="w-4 h-4 text-coral-500 mr-1" />
                  <span className="text-sm font-medium text-coral-600">support@blumehealthco.com</span>
                </div>
              </div>
            </div>
            
            <div className='flex flex-col sm:flex-row items-start sm:items-center gap-3'>
              <span className="text-sm text-slate-700">
                Book 1:1 meeting with us for personal guidance
              </span>
              <Button className='bg-gradient-to-r from-coral-500 to-coral-600 hover:from-coral-600 hover:to-coral-700 text-white rounded-xl shadow-md hover:shadow-lg transition-all duration-200'>
                <Calendar className="w-4 h-4 mr-2" />
                Schedule Call
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;