"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  HelpCircle,
  ArrowRight,
  CheckCircle2,
  Building2,
  Briefcase,
  Factory,
  ShoppingCart,
  Film,
  DollarSign,
  TrendingUp,
  FileText,
  MapPin,
  Users,
  Target,
  Sparkles,
  Rocket,
  CheckSquare,
  AlertCircle,
  Info,
  ChevronDown,
  ArrowDown,
  Download,
  Mail,
  Lightbulb,
  Shield,
  Globe,
  Zap,
  X,
  Package,
  ArrowLeftRight,
} from "lucide-react"
import Image from "next/image"

export default function JourneyMap() {
  const [expandedStages, setExpandedStages] = useState<string[]>([
    "tech-1", "tech-2", "tech-3", "tech-4",
    "standard-1", "standard-2", "standard-3", "standard-4", "standard-5"
  ])

  const toggleAllStages = (journey: "tech" | "standard") => {
    const stageIds = journey === "tech" 
      ? ["tech-1", "tech-2", "tech-3", "tech-4"]
      : ["standard-1", "standard-2", "standard-3", "standard-4", "standard-5"]
    
    const allExpanded = stageIds.every(id => expandedStages.includes(id))
    
    if (allExpanded) {
      setExpandedStages([])
    } else {
      setExpandedStages(stageIds)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <Card className="mb-6 border-purple-200 shadow-lg">
          <CardHeader className="text-center bg-white text-primary rounded-t-lg rounded-b-lg">
            <div className="flex items-center justify-center gap-6 mb-2">
              <div className="relative w-60 h-60 flex items-center justify-center">
                <Image
                  src="/ADGOV.png"
                  alt="Abu Dhabi Government Logo"
                  width={240}
                  height={240}
                  className="object-contain"
                />
              </div>
              <div className="h-32 w-px bg-primary/30 self-center"></div>
              <div className="relative w-60 h-60 flex items-center justify-center">
                <Image
                  src="/incorpify-logo-gradient.webp"
                  alt="Incorpify Logo"
                  width={240}
                  height={240}
                  className="object-contain"
                />
              </div>
            </div>
            <CardTitle className="text-3xl md:text-4xl font-bold text-primary">
              Abu Dhabi Company Setup Journey
            </CardTitle>
            <CardDescription className="text-primary/80 text-lg mt-2">
              Interactive guide for tech startups and standard company formation
            </CardDescription>
          </CardHeader>
        </Card>

        {/* Journey Tabs */}
        <Tabs defaultValue="tech" className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-purple-100 p-1 h-auto">
            <TabsTrigger 
              value="tech" 
              className="data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-md py-3 text-base font-semibold"
            >
              <Rocket className="w-5 h-5 mr-2" />
              Tech Startup Journey
            </TabsTrigger>
            <TabsTrigger 
              value="standard"
              className="data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-md py-3 text-base font-semibold"
            >
              <Building2 className="w-5 h-5 mr-2" />
              Standard Company Journey
            </TabsTrigger>
          </TabsList>

          {/* Tech Startup Journey */}
          <TabsContent value="tech" className="mt-6 space-y-6 animate-fade-in">
            <div className="flex justify-end">
              <Button
                onClick={() => toggleAllStages("tech")}
                variant="outline"
                className="border-purple-300 text-primary hover:bg-purple-50"
              >
                {["tech-1", "tech-2", "tech-3", "tech-4"].every(id => expandedStages.includes(id))
                  ? "Collapse All Stages"
                  : "Expand All Stages"}
              </Button>
            </div>

            {/* Stage 1 */}
            <Card className="border-2 border-purple-300 shadow-md hover:shadow-xl transition-all duration-300">
              <Accordion
                type="multiple"
                value={expandedStages}
                onValueChange={(values) => {
                  setExpandedStages(values)
                }}
              >
                <AccordionItem value="tech-1" className="border-none">
                  <AccordionTrigger className="bg-gradient-to-r from-primary to-primary/90 text-white hover:no-underline px-6 py-4 rounded-t-lg">
                    <div className="flex items-center gap-4 w-full">
                      <div className="bg-white text-primary rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg">
                        1
                      </div>
                      <h3 className="text-xl font-semibold flex-1 text-left">Stage 1: Entry and Startup Identification</h3>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <CardContent className="pt-6 space-y-6 animate-fade-in">
                      <div className="space-y-3">
                        <div className="flex items-center gap-2 text-primary font-semibold">
                          <Target className="w-5 h-5" />
                          <h4 className="text-lg">User Selection</h4>
                        </div>
                        <p className="text-gray-700 pl-7">User self-selects "Tech Startup" and confirms through classification questions.</p>
                      </div>

                      <div className="space-y-3">
                        <div className="flex items-center gap-2 text-primary font-semibold">
                          <HelpCircle className="w-5 h-5" />
                          <h4 className="text-lg">Classification Questions</h4>
                        </div>
                        <ul className="space-y-2 pl-7">
                          <li className="flex items-start gap-3">
                            <Rocket className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">What is your company's product or technology?</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <TrendingUp className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">What stage are you at? (Idea, MVP, Revenue, Scaling)</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <Globe className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">What sector? (AI, Fintech, Climate, HealthTech, Web3, etc)</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <DollarSign className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">Funding status? (Bootstrapped, Angel, Seed, Series A)</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <Users className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">Team size and location?</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <FileText className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">Add any other relevant information.</span>
                          </li>
                        </ul>
                      </div>

                      <div className="space-y-3">
                        <div className="flex items-center gap-2 text-primary font-semibold">
                          <ArrowRight className="w-5 h-5" />
                          <h4 className="text-lg">Outputs</h4>
                        </div>
                        <ul className="space-y-2 pl-7">
                          <li className="flex items-start gap-3">
                            <ArrowRight className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">Confirmed startup qualification</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <ArrowRight className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">Sector knowledge</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <ArrowRight className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">Stage knowledge</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <ArrowRight className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">Recommended track (Early stage vs scale stage)</span>
                          </li>
                        </ul>
                      </div>
                    </CardContent>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </Card>

            {/* Flow Arrow */}
            <div className="flex justify-center my-4">
              <ArrowDown className="w-8 h-8 text-primary animate-bounce" />
            </div>

            {/* Stage 2 */}
            <Card className="border-2 border-purple-300 shadow-md hover:shadow-xl transition-all duration-300">
              <Accordion
                type="multiple"
                value={Array.from(expandedStages)}
                onValueChange={(values) => {
                  setExpandedStages(values)
                }}
              >
                <AccordionItem value="tech-2" className="border-none">
                  <AccordionTrigger className="bg-gradient-to-r from-primary to-primary/90 text-white hover:no-underline px-6 py-4 rounded-t-lg">
                    <div className="flex items-center gap-4 w-full">
                      <div className="bg-white text-primary rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg">
                        2
                      </div>
                      <h3 className="text-xl font-semibold flex-1 text-left">Stage 2: Hub71 Eligibility Screening</h3>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <CardContent className="pt-6 space-y-6 animate-fade-in">
                      <div className="space-y-3">
                        <div className="flex items-center gap-2 text-primary font-semibold">
                          <CheckSquare className="w-5 h-5" />
                          <h4 className="text-lg">Hub71 Key Criteria</h4>
                        </div>
                        <ul className="space-y-2 pl-7">
                          <li className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">Tech-enabled solution</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">Differentiated product or IP</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">Team with execution capability</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">Global market potential</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">Alignment to thematic cohorts (AI, Fintech, Web3, ClimateTech, etc)</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">Willingness to build from/for Abu Dhabi</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">Preferably MVP stage or later for main program</span>
                          </li>
                        </ul>
                      </div>

                      <div className="space-y-3">
                        <div className="flex items-center gap-2 text-primary font-semibold">
                          <Zap className="w-5 h-5" />
                          <h4 className="text-lg">AI Screening Outputs</h4>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                          <Card className="border-2 border-green-500 bg-green-50 hover:shadow-lg transition-all">
                            <CardHeader>
                              <CardTitle className="text-base flex items-center gap-2">
                                <CheckCircle2 className="w-5 h-5 text-green-600" />
                                Eligible for Incentive Program
                              </CardTitle>
                            </CardHeader>
                            <CardContent>
                              <p className="text-sm text-gray-700">Flagship program with full subsidies and support.</p>
                            </CardContent>
                          </Card>
                          <Card className="border-2 border-green-500 bg-green-50 hover:shadow-lg transition-all">
                            <CardHeader>
                              <CardTitle className="text-base flex items-center gap-2">
                                <CheckCircle2 className="w-5 h-5 text-green-600" />
                                Eligible for Hub71+ Thematic
                              </CardTitle>
                            </CardHeader>
                            <CardContent>
                              <p className="text-sm text-gray-700">Sector-specific cohort programs.</p>
                            </CardContent>
                          </Card>
                          <Card className="border-2 border-yellow-500 bg-yellow-50 hover:shadow-lg transition-all">
                            <CardHeader>
                              <CardTitle className="text-base flex items-center gap-2">
                                <AlertCircle className="w-5 h-5 text-yellow-600" />
                                Community Membership
                              </CardTitle>
                            </CardHeader>
                            <CardContent>
                              <p className="text-sm text-gray-700">Ecosystem access without full incentives.</p>
                            </CardContent>
                          </Card>
                          <Card className="border-2 border-yellow-500 bg-yellow-50 hover:shadow-lg transition-all">
                            <CardHeader>
                              <CardTitle className="text-base flex items-center gap-2">
                                <AlertCircle className="w-5 h-5 text-yellow-600" />
                                Venture Studio Track
                              </CardTitle>
                            </CardHeader>
                            <CardContent>
                              <p className="text-sm text-gray-700">For founders at idea stage.</p>
                            </CardContent>
                          </Card>
                          <Card className="border-2 border-red-500 bg-red-50 hover:shadow-lg transition-all">
                            <CardHeader>
                              <CardTitle className="text-base flex items-center gap-2">
                                <X className="w-5 h-5 text-red-600" />
                                Not Eligible Yet
                              </CardTitle>
                            </CardHeader>
                            <CardContent>
                              <p className="text-sm text-gray-700">With improvement suggestions provided.</p>
                            </CardContent>
                          </Card>
                        </div>
                      </div>
                    </CardContent>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </Card>

            {/* Flow Arrow */}
            <div className="flex justify-center my-4">
              <ArrowDown className="w-8 h-8 text-primary animate-bounce" />
            </div>

            {/* Stage 3 */}
            <Card className="border-2 border-purple-300 shadow-md hover:shadow-xl transition-all duration-300">
              <Accordion
                type="multiple"
                value={Array.from(expandedStages)}
                onValueChange={(values) => {
                  setExpandedStages(values)
                }}
              >
                <AccordionItem value="tech-3" className="border-none">
                  <AccordionTrigger className="bg-gradient-to-r from-primary to-primary/90 text-white hover:no-underline px-6 py-4 rounded-t-lg">
                    <div className="flex items-center gap-4 w-full">
                      <div className="bg-white text-primary rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg">
                        3
                      </div>
                      <h3 className="text-xl font-semibold flex-1 text-left">Stage 3: Program Matching and Routing</h3>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <CardContent className="pt-6 space-y-6 animate-fade-in">
                      <div className="bg-purple-50 border-l-4 border-primary p-4 rounded">
                        <p className="text-gray-700">
                          Based on sector, stage, and eligibility, AI recommends correct Hub71 program and routing.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Card className="border-2 border-green-500 bg-green-50 hover:shadow-lg transition-all">
                          <CardHeader>
                            <CardTitle className="text-base flex items-center gap-2">
                              <CheckCircle2 className="w-5 h-5 text-green-600" />
                              1. Incentive Program (Flagship)
                            </CardTitle>
                          </CardHeader>
                          <CardContent className="space-y-2">
                            <p className="text-sm"><strong>For:</strong> Seed to Series A, scaling potential, strong tech/IP.</p>
                            <p className="text-sm"><strong>Benefits:</strong> Up to 100% relocation subsidies, office space, partner access.</p>
                            <p className="text-sm"><strong>Triggers:</strong> MVP/revenue stage, solid team, clear IP, global scale potential.</p>
                            <div className="pt-3 border-t border-green-300 mt-3">
                              <p className="text-sm font-semibold text-green-700 flex items-center gap-2">
                                <ArrowRight className="w-4 h-4" />
                                Redirect to Hub71 Incentive Program application portal
                              </p>
                            </div>
                          </CardContent>
                        </Card>

                        <Card className="border-2 border-green-500 bg-green-50 hover:shadow-lg transition-all">
                          <CardHeader>
                            <CardTitle className="text-base flex items-center gap-2">
                              <CheckCircle2 className="w-5 h-5 text-green-600" />
                              2. Hub71+ Thematic Programs
                            </CardTitle>
                          </CardHeader>
                          <CardContent className="space-y-2">
                            <p className="text-sm"><strong>Sectors:</strong> AI, ClimateTech, Web3, Fintech, HealthTech.</p>
                            <p className="text-sm"><strong>Triggers:</strong> Sector match, fits challenge statements, early traction.</p>
                            <div className="pt-3 border-t border-green-300 mt-3">
                              <p className="text-sm font-semibold text-green-700 flex items-center gap-2">
                                <ArrowRight className="w-4 h-4" />
                                Redirect to Hub71+ Thematic Program portal
                              </p>
                            </div>
                          </CardContent>
                        </Card>

                        <Card className="border-2 border-yellow-500 bg-yellow-50 hover:shadow-lg transition-all">
                          <CardHeader>
                            <CardTitle className="text-base flex items-center gap-2">
                              <AlertCircle className="w-5 h-5 text-yellow-600" />
                              3. Community Membership
                            </CardTitle>
                          </CardHeader>
                          <CardContent className="space-y-2">
                            <p className="text-sm"><strong>For:</strong> Too early for incentives but wanting ecosystem access.</p>
                            <p className="text-sm"><strong>Triggers:</strong> Idea/MVP stage, high potential, bootstrapped.</p>
                            <div className="pt-3 border-t border-yellow-300 mt-3">
                              <p className="text-sm font-semibold text-yellow-700 flex items-center gap-2">
                                <ArrowRight className="w-4 h-4" />
                                Redirect to Hub71 Community Membership portal
                              </p>
                            </div>
                          </CardContent>
                        </Card>

                        <Card className="border-2 border-yellow-500 bg-yellow-50 hover:shadow-lg transition-all">
                          <CardHeader>
                            <CardTitle className="text-base flex items-center gap-2">
                              <AlertCircle className="w-5 h-5 text-yellow-600" />
                              4. Venture Studio Track
                            </CardTitle>
                          </CardHeader>
                          <CardContent className="space-y-2">
                            <p className="text-sm"><strong>For:</strong> Founders at idea stage with no product yet.</p>
                            <p className="text-sm"><strong>Triggers:</strong> Early prototype, strong founder, no revenue, need product support.</p>
                            <div className="pt-3 border-t border-yellow-300 mt-3">
                              <p className="text-sm font-semibold text-yellow-700 flex items-center gap-2">
                                <ArrowRight className="w-4 h-4" />
                                Redirect to Hub71 Venture Studio portal
                              </p>
                            </div>
                          </CardContent>
                        </Card>

                        <Card className="border-2 border-red-500 bg-red-50 hover:shadow-lg transition-all md:col-span-2">
                          <CardHeader>
                            <CardTitle className="text-base flex items-center gap-2">
                              <X className="w-5 h-5 text-red-600" />
                              5. Not Eligible for Hub71
                            </CardTitle>
                          </CardHeader>
                          <CardContent className="space-y-2">
                            <p className="text-sm"><strong>Reason:</strong> Does not meet Hub71 tech startup criteria or readiness level.</p>
                            <div className="pt-3 border-t border-red-300 mt-3">
                              <p className="text-sm font-semibold text-red-700 flex items-center gap-2">
                                <ArrowRight className="w-4 h-4" />
                                Redirect to Standard Company Journey
                              </p>
                              <p className="text-xs text-gray-600 mt-2">User will be guided through Abu Dhabi jurisdiction matching for standard business setup.</p>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </CardContent>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </Card>

            {/* Flow Arrow */}
            <div className="flex justify-center my-4">
              <ArrowDown className="w-8 h-8 text-primary animate-bounce" />
            </div>

            {/* Stage 4 */}
            <Card className="border-2 border-dashed border-purple-400 shadow-md hover:shadow-xl transition-all duration-300">
              <Accordion
                type="multiple"
                value={Array.from(expandedStages)}
                onValueChange={(values) => {
                  setExpandedStages(values)
                }}
              >
                <AccordionItem value="tech-4" className="border-none">
                  <AccordionTrigger className="bg-gradient-to-r from-primary/80 to-primary text-white hover:no-underline px-6 py-4 rounded-t-lg">
                    <div className="flex items-center gap-4 w-full">
                      <div className="bg-white text-primary rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg">
                        4
                      </div>
                      <h3 className="text-xl font-semibold flex-1 text-left">Stage 4: Startup Guidance Pack (Optional)</h3>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <CardContent className="pt-6 space-y-6 animate-fade-in">
                      <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
                        <p className="text-sm text-gray-700">
                          <strong>Optional Enhancement:</strong> For eligible startups, AI can generate additional guidance materials before application.
                        </p>
                      </div>

                      <div className="space-y-3">
                        <div className="flex items-center gap-2 text-primary font-semibold">
                          <FileText className="w-5 h-5" />
                          <h4 className="text-lg">AI-Generated Personalized Guidance Pack</h4>
                        </div>
                        <ul className="space-y-2 pl-7">
                          <li className="flex items-start gap-3">
                            <ArrowRight className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">Recommended Hub71 program summary</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <ArrowRight className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">Required documents checklist</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <ArrowRight className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">Application steps and timeline</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <ArrowRight className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">Success tips (what Hub71 looks for)</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <ArrowRight className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">Risks or missing components identified</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <ArrowRight className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">How to increase acceptance chances</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <ArrowRight className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">Tailored application summary</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <ArrowRight className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">Draft answers to program questions</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <ArrowRight className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">Pitch deck guidance</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <ArrowRight className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">Team profile structuring recommendations</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <ArrowRight className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">Market sizing reasoning support</span>
                          </li>
                        </ul>
                        <p className="text-sm text-gray-600 mt-4 pl-7">Pack can be exported or emailed to startup founders.</p>
                      </div>
                    </CardContent>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </Card>

            {/* Alternative Path */}
            <Card className="bg-gradient-to-r from-purple-50 to-purple-100 border-purple-200 mt-6">
              <CardHeader>
                <CardTitle className="text-primary flex items-center gap-2">
                  <Info className="w-5 h-5" />
                  Alternative Path: Direct Company Formation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-3">For startups that prefer to establish their company structure first before applying to Hub71, or for those exploring other options:</p>
                <p className="text-sm text-primary font-semibold flex items-center gap-2">
                  <ArrowRight className="w-4 h-4" />
                  Proceed with <strong>Incorpify</strong> for end-to-end company formation assistance in ADGM or other Abu Dhabi jurisdictions.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Standard Company Journey */}
          <TabsContent value="standard" className="mt-6 space-y-6 animate-fade-in">
            <div className="flex justify-end">
              <Button
                onClick={() => toggleAllStages("standard")}
                variant="outline"
                className="border-purple-300 text-primary hover:bg-purple-50"
              >
                {["standard-1", "standard-2", "standard-3", "standard-4", "standard-5"].every(id => expandedStages.includes(id))
                  ? "Collapse All Stages"
                  : "Expand All Stages"}
              </Button>
            </div>

            {/* Stage 1 */}
            <Card className="border-2 border-purple-300 shadow-md hover:shadow-xl transition-all duration-300">
              <Accordion
                type="multiple"
                value={Array.from(expandedStages)}
                onValueChange={(values) => {
                  setExpandedStages(values)
                }}
              >
                <AccordionItem value="standard-1" className="border-none">
                  <AccordionTrigger className="bg-gradient-to-r from-primary to-primary/90 text-white hover:no-underline px-6 py-4 rounded-t-lg">
                    <div className="flex items-center gap-4 w-full">
                      <div className="bg-white text-primary rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg">
                        1
                      </div>
                      <h3 className="text-xl font-semibold flex-1 text-left">Stage 1: Entry and Company Identification</h3>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <CardContent className="pt-6 space-y-6 animate-fade-in">
                      <div className="space-y-3">
                        <div className="flex items-center gap-2 text-primary font-semibold">
                          <Target className="w-5 h-5" />
                          <h4 className="text-lg">Start Point</h4>
                        </div>
                        <p className="text-gray-700 pl-7">User selects "Set up or expand a company in Abu Dhabi"</p>
                      </div>

                      <div className="space-y-3">
                        <div className="flex items-center gap-2 text-primary font-semibold">
                          <HelpCircle className="w-5 h-5" />
                          <h4 className="text-lg">Mandatory Classification Questions</h4>
                        </div>
                        <ul className="space-y-2 pl-7">
                          <li className="flex items-start gap-3">
                            <Building2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">Are you opening a new company or expanding an existing company?</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <Briefcase className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">What is your business activity? (consulting, logistics, e-commerce, holding, trading, manufacturing, real estate, etc)</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <Users className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">What is your ownership structure? (100% foreign owned, local partnership, branch of foreign entity)</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <Users className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">How many employees do you anticipate in the UAE in year 1?</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <Building2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">Do you need physical office, flexi desk, or no space requirement?</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">Where will your clients be located? (UAE, GCC, global)</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <ShoppingCart className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">Do you expect to sell goods or services?</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <ArrowLeftRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">Do you require import-export capabilities?</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <Shield className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">Do you have any preferred regulatory environment? (Light touch, financial services, general commercial)</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckSquare className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">Any special approvals needed? (health, education, engineering, media, etc)</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <DollarSign className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">What is your budget range for setup and yearly costs?</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <Users className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">Do you require visa quotas for staff?</span>
                          </li>
                        </ul>
                      </div>

                      <div className="space-y-3">
                        <div className="flex items-center gap-2 text-primary font-semibold">
                          <ArrowRight className="w-5 h-5" />
                          <h4 className="text-lg">Outputs</h4>
                        </div>
                        <ul className="space-y-2 pl-7">
                          <li className="flex items-start gap-3">
                            <ArrowRight className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">Activity classification</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <ArrowRight className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">Space requirement</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <ArrowRight className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">Visa expectation</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <ArrowRight className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">Regulatory complexity category</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <ArrowRight className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">Ownership model</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <ArrowRight className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">Budget suitability</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <ArrowRight className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">Physical vs virtual requirement</span>
                          </li>
                        </ul>
                      </div>
                    </CardContent>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </Card>

            {/* Flow Arrow */}
            <div className="flex justify-center my-4">
              <ArrowDown className="w-8 h-8 text-primary animate-bounce" />
            </div>

            {/* Stage 2 */}
            <Card className="border-2 border-purple-300 shadow-md hover:shadow-xl transition-all duration-300">
              <Accordion
                type="multiple"
                value={Array.from(expandedStages)}
                onValueChange={(values) => {
                  setExpandedStages(values)
                }}
              >
                <AccordionItem value="standard-2" className="border-none">
                  <AccordionTrigger className="bg-gradient-to-r from-primary to-primary/90 text-white hover:no-underline px-6 py-4 rounded-t-lg">
                    <div className="flex items-center gap-4 w-full">
                      <div className="bg-white text-primary rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg">
                        2
                      </div>
                      <h3 className="text-xl font-semibold flex-1 text-left">Stage 2: Needs Assessment and Filter Logic</h3>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <CardContent className="pt-6 space-y-6 animate-fade-in">
                      <div className="space-y-3">
                        <div className="flex items-center gap-2 text-primary font-semibold">
                          <Zap className="w-5 h-5" />
                          <h4 className="text-lg">AI Evaluation Process</h4>
                        </div>
                        <p className="text-gray-700 pl-7">AI evaluates user information to determine restrictions, licenses needed, and identify if special regulators are involved.</p>
                      </div>

                      <div className="space-y-3">
                        <div className="flex items-center gap-2 text-primary font-semibold">
                          <Building2 className="w-5 h-5" />
                          <h4 className="text-lg">Company Category Mapping</h4>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                          <Card className="border-purple-200 hover:border-purple-400 hover:shadow-md transition-all">
                            <CardHeader>
                              <CardTitle className="text-sm flex items-center gap-2">
                                <Briefcase className="w-4 h-4 text-primary" />
                                Professional Services
                              </CardTitle>
                            </CardHeader>
                            <CardContent>
                              <p className="text-xs text-gray-600">Consulting, advisory, admin</p>
                            </CardContent>
                          </Card>
                          <Card className="border-purple-200 hover:border-purple-400 hover:shadow-md transition-all">
                            <CardHeader>
                              <CardTitle className="text-sm flex items-center gap-2">
                                <TrendingUp className="w-4 h-4 text-primary" />
                                Trading or Logistics
                              </CardTitle>
                            </CardHeader>
                            <CardContent>
                              <p className="text-xs text-gray-600">Import, export, distribution</p>
                            </CardContent>
                          </Card>
                          <Card className="border-purple-200 hover:border-purple-400 hover:shadow-md transition-all">
                            <CardHeader>
                              <CardTitle className="text-sm flex items-center gap-2">
                                <Shield className="w-4 h-4 text-primary" />
                                Holding Entity
                              </CardTitle>
                            </CardHeader>
                            <CardContent>
                              <p className="text-xs text-gray-600">Investment holding structure</p>
                            </CardContent>
                          </Card>
                          <Card className="border-purple-200 hover:border-purple-400 hover:shadow-md transition-all">
                            <CardHeader>
                              <CardTitle className="text-sm flex items-center gap-2">
                                <Zap className="w-4 h-4 text-primary" />
                                Tech-Enabled (Non-Startup)
                              </CardTitle>
                            </CardHeader>
                            <CardContent>
                              <p className="text-xs text-gray-600">Technology services</p>
                            </CardContent>
                          </Card>
                          <Card className="border-purple-200 hover:border-purple-400 hover:shadow-md transition-all">
                            <CardHeader>
                              <CardTitle className="text-sm flex items-center gap-2">
                                <Film className="w-4 h-4 text-primary" />
                                Media and Creative
                              </CardTitle>
                            </CardHeader>
                            <CardContent>
                              <p className="text-xs text-gray-600">Content, production, creative</p>
                            </CardContent>
                          </Card>
                          <Card className="border-purple-200 hover:border-purple-400 hover:shadow-md transition-all">
                            <CardHeader>
                              <CardTitle className="text-sm flex items-center gap-2">
                                <Factory className="w-4 h-4 text-primary" />
                                Industrial/Manufacturing
                              </CardTitle>
                            </CardHeader>
                            <CardContent>
                              <p className="text-xs text-gray-600">Production, assembly</p>
                            </CardContent>
                          </Card>
                          <Card className="border-purple-200 hover:border-purple-400 hover:shadow-md transition-all">
                            <CardHeader>
                              <CardTitle className="text-sm flex items-center gap-2">
                                <DollarSign className="w-4 h-4 text-primary" />
                                Financial Services
                              </CardTitle>
                            </CardHeader>
                            <CardContent>
                              <p className="text-xs text-gray-600">Regulated financial activities</p>
                            </CardContent>
                          </Card>
                          <Card className="border-purple-200 hover:border-purple-400 hover:shadow-md transition-all">
                            <CardHeader>
                              <CardTitle className="text-sm flex items-center gap-2">
                                <ShoppingCart className="w-4 h-4 text-primary" />
                                E-Commerce
                              </CardTitle>
                            </CardHeader>
                            <CardContent>
                              <p className="text-xs text-gray-600">Online retail operations</p>
                            </CardContent>
                          </Card>
                        </div>
                        <p className="text-sm text-gray-600 mt-4"><strong>Why:</strong> Each category maps differently across Abu Dhabi free zones and mainland.</p>
                      </div>
                    </CardContent>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </Card>

            {/* Flow Arrow */}
            <div className="flex justify-center my-4">
              <ArrowDown className="w-8 h-8 text-primary animate-bounce" />
            </div>

            {/* Stage 3 */}
            <Card className="border-2 border-purple-300 shadow-md hover:shadow-xl transition-all duration-300">
              <Accordion
                type="multiple"
                value={Array.from(expandedStages)}
                onValueChange={(values) => {
                  setExpandedStages(values)
                }}
              >
                <AccordionItem value="standard-3" className="border-none">
                  <AccordionTrigger className="bg-gradient-to-r from-primary to-primary/90 text-white hover:no-underline px-6 py-4 rounded-t-lg">
                    <div className="flex items-center gap-4 w-full">
                      <div className="bg-white text-primary rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg">
                        3
                      </div>
                      <h3 className="text-xl font-semibold flex-1 text-left">Stage 3: Jurisdiction Feasibility Check</h3>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <CardContent className="pt-6 space-y-6 animate-fade-in">
                      <div className="space-y-3">
                        <div className="flex items-center gap-2 text-primary font-semibold">
                          <Zap className="w-5 h-5" />
                          <h4 className="text-lg">AI checks each Abu Dhabi jurisdiction against user profile</h4>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div className="flex items-center gap-2 text-primary font-semibold">
                          <MapPin className="w-5 h-5" />
                          <h4 className="text-lg">Jurisdictions Included</h4>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="outline" className="border-purple-300 text-primary">ADGM</Badge>
                          <Badge variant="outline" className="border-purple-300 text-primary">Masdar City</Badge>
                          <Badge variant="outline" className="border-purple-300 text-primary">TwoFour54</Badge>
                          <Badge variant="outline" className="border-purple-300 text-primary">KEZAD</Badge>
                          <Badge variant="outline" className="border-purple-300 text-primary">Abu Dhabi Mainland (DED)</Badge>
                          <Badge variant="outline" className="border-purple-300 text-primary">Other Abu Dhabi Free Zones</Badge>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div className="flex items-center gap-2 text-primary font-semibold">
                          <CheckSquare className="w-5 h-5" />
                          <h4 className="text-lg">Feasibility Factors</h4>
                        </div>
                        <ul className="space-y-2 pl-7">
                          <li className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">Allowed business activities</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">Office or warehouse requirements</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">Visa quotas</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">Approval needs</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">Cost alignment</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">Ownership model acceptance</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">Licensing renewal complexity</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">Fast-track availability</span>
                          </li>
                        </ul>
                      </div>

                      <div className="space-y-3">
                        <div className="flex items-center gap-2 text-primary font-semibold">
                          <ArrowRight className="w-5 h-5" />
                          <h4 className="text-lg">Outputs</h4>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <Card className="border-2 border-green-500 bg-green-50">
                            <CardHeader>
                              <CardTitle className="text-sm flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-green-600" />
                                Full Fit
                              </CardTitle>
                            </CardHeader>
                            <CardContent>
                              <p className="text-xs text-gray-700">All requirements met. Jurisdiction fully suitable.</p>
                            </CardContent>
                          </Card>
                          <Card className="border-2 border-yellow-500 bg-yellow-50">
                            <CardHeader>
                              <CardTitle className="text-sm flex items-center gap-2">
                                <AlertCircle className="w-4 h-4 text-yellow-600" />
                                Partial Fit
                              </CardTitle>
                            </CardHeader>
                            <CardContent>
                              <p className="text-xs text-gray-700">Most requirements met with minor restrictions.</p>
                            </CardContent>
                          </Card>
                          <Card className="border-2 border-red-500 bg-red-50">
                            <CardHeader>
                              <CardTitle className="text-sm flex items-center gap-2">
                                <X className="w-4 h-4 text-red-600" />
                                Not Suitable
                              </CardTitle>
                            </CardHeader>
                            <CardContent>
                              <p className="text-xs text-gray-700">Key requirements not met.</p>
                            </CardContent>
                          </Card>
                        </div>
                        <p className="text-sm text-gray-600 mt-4">Cost and timeline range provided for each. Restrictions noted where applicable.</p>
                      </div>
                    </CardContent>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </Card>

            {/* Flow Arrow */}
            <div className="flex justify-center my-4">
              <ArrowDown className="w-8 h-8 text-primary animate-bounce" />
            </div>

            {/* Stage 4 */}
            <Card className="border-2 border-purple-300 shadow-md hover:shadow-xl transition-all duration-300">
              <Accordion
                type="multiple"
                value={Array.from(expandedStages)}
                onValueChange={(values) => {
                  setExpandedStages(values)
                }}
              >
                <AccordionItem value="standard-4" className="border-none">
                  <AccordionTrigger className="bg-gradient-to-r from-primary to-primary/90 text-white hover:no-underline px-6 py-4 rounded-t-lg">
                    <div className="flex items-center gap-4 w-full">
                      <div className="bg-white text-primary rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg">
                        4
                      </div>
                      <h3 className="text-xl font-semibold flex-1 text-left">Stage 4: Recommendation Engine and Routing</h3>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <CardContent className="pt-6 space-y-6 animate-fade-in">
                      <div className="bg-purple-50 border-l-4 border-primary p-4 rounded">
                        <p className="text-gray-700">
                          Based on all inputs, AI produces ranked list of suggested jurisdictions with direct routing
                        </p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Card className="border-2 border-green-500 bg-green-50 hover:shadow-lg transition-all">
                          <CardHeader>
                            <CardTitle className="text-base flex items-center gap-2">
                              <CheckCircle2 className="w-5 h-5 text-green-600" />
                              1. Most Suitable
                            </CardTitle>
                          </CardHeader>
                          <CardContent className="space-y-2">
                            <p className="text-sm"><strong>Example: ADGM</strong></p>
                            <p className="text-sm">Strong match for professional services and holding companies.</p>
                            <p className="text-sm"><strong>Rationale:</strong> 100% foreign ownership, fast licensing, no local sponsor.</p>
                            <div className="pt-3 border-t border-green-300 mt-3">
                              <p className="text-sm font-semibold text-green-700 flex items-center gap-2">
                                <ArrowRight className="w-4 h-4" />
                                Redirect to ADGM registration portal
                              </p>
                            </div>
                          </CardContent>
                        </Card>

                        <Card className="border-2 border-green-500 bg-green-50 hover:shadow-lg transition-all">
                          <CardHeader>
                            <CardTitle className="text-base flex items-center gap-2">
                              <CheckCircle2 className="w-5 h-5 text-green-600" />
                              2. Good Alternative
                            </CardTitle>
                          </CardHeader>
                          <CardContent className="space-y-2">
                            <p className="text-sm"><strong>Example: Masdar City</strong></p>
                            <p className="text-sm">Lower cost, similar activity coverage.</p>
                            <p className="text-sm"><strong>Rationale:</strong> Cost-effective for consulting or sustainability-linked companies.</p>
                            <div className="pt-3 border-t border-green-300 mt-3">
                              <p className="text-sm font-semibold text-green-700 flex items-center gap-2">
                                <ArrowRight className="w-4 h-4" />
                                Redirect to Masdar City portal
                              </p>
                            </div>
                          </CardContent>
                        </Card>

                        <Card className="border-2 border-yellow-500 bg-yellow-50 hover:shadow-lg transition-all">
                          <CardHeader>
                            <CardTitle className="text-base flex items-center gap-2">
                              <AlertCircle className="w-5 h-5 text-yellow-600" />
                              3. Secondary Option
                            </CardTitle>
                          </CardHeader>
                          <CardContent className="space-y-2">
                            <p className="text-sm"><strong>Example: Mainland (DED)</strong></p>
                            <p className="text-sm">If higher visa quota or local contracting needed.</p>
                            <p className="text-sm"><strong>Rationale:</strong> Easier for B2G contracts or wide commercial licenses.</p>
                            <div className="pt-3 border-t border-yellow-300 mt-3">
                              <p className="text-sm font-semibold text-yellow-700 flex items-center gap-2">
                                <ArrowRight className="w-4 h-4" />
                                Redirect to DED portal
                              </p>
                            </div>
                          </CardContent>
                        </Card>

                        <Card className="border-2 border-red-500 bg-red-50 hover:shadow-lg transition-all">
                          <CardHeader>
                            <CardTitle className="text-base flex items-center gap-2">
                              <X className="w-5 h-5 text-red-600" />
                              4. Not Recommended
                            </CardTitle>
                          </CardHeader>
                          <CardContent className="space-y-2">
                            <p className="text-sm"><strong>Example: KEZAD</strong></p>
                            <p className="text-sm">Requires warehouse or industrial activity.</p>
                            <p className="text-sm"><strong>Rationale:</strong> User does not need physical operations.</p>
                          </CardContent>
                        </Card>
                      </div>

                      <div className="space-y-3">
                        <div className="flex items-center gap-2 text-primary font-semibold">
                          <Info className="w-5 h-5" />
                          <h4 className="text-lg">AI Presents for Each Option</h4>
                        </div>
                        <ul className="space-y-2 pl-7">
                          <li className="flex items-start gap-3">
                            <ArrowRight className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">Pros and cons</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <ArrowRight className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">Licensing costs</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <ArrowRight className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">Setup timeline</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <ArrowRight className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">Visa allocation</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <ArrowRight className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">Office requirements</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <ArrowRight className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">Special approvals</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <ArrowRight className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">Renewal structure</span>
                          </li>
                        </ul>
                      </div>

                      <Card className="bg-gradient-to-r from-purple-100 to-purple-200 border-purple-300">
                        <CardHeader>
                          <CardTitle className="text-purple-900">Final Output Directs User To:</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-700 mb-3">Recommended free zone or mainland registration portal based on best fit.</p>
                          <div className="bg-white/50 p-4 rounded border border-purple-200">
                            <p className="text-sm font-semibold text-purple-900 mb-2">Example Output:</p>
                            <p className="text-sm text-gray-700">"Based on your activity and requirements, ADGM is the most suitable option. Click here to proceed to ADGM licensing."</p>
                          </div>
                        </CardContent>
                      </Card>
                    </CardContent>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </Card>

            {/* Flow Arrow */}
            <div className="flex justify-center my-4">
              <ArrowDown className="w-8 h-8 text-primary animate-bounce" />
            </div>

            {/* Stage 5 */}
            <Card className="border-2 border-dashed border-purple-400 shadow-md hover:shadow-xl transition-all duration-300">
              <Accordion
                type="multiple"
                value={Array.from(expandedStages)}
                onValueChange={(values) => {
                  setExpandedStages(values)
                }}
              >
                <AccordionItem value="standard-5" className="border-none">
                  <AccordionTrigger className="bg-gradient-to-r from-primary/80 to-primary text-white hover:no-underline px-6 py-4 rounded-t-lg">
                    <div className="flex items-center gap-4 w-full">
                      <div className="bg-white text-primary rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg">
                        5
                      </div>
                      <h3 className="text-xl font-semibold flex-1 text-left">Stage 5: Guidance Pack (Optional)</h3>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <CardContent className="pt-6 space-y-6 animate-fade-in">
                      <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
                        <p className="text-sm text-gray-700">
                          <strong>Optional Enhancement:</strong> For users who want additional documentation before proceeding.
                        </p>
                      </div>

                      <div className="space-y-3">
                        <div className="flex items-center gap-2 text-primary font-semibold">
                          <FileText className="w-5 h-5" />
                          <h4 className="text-lg">AI Generates Structured Report</h4>
                        </div>
                        <ul className="space-y-2 pl-7">
                          <li className="flex items-start gap-3">
                            <ArrowRight className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">Recommended jurisdiction</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <ArrowRight className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">Alternatives and rationale</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <ArrowRight className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">Setup steps</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <ArrowRight className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">Required documents</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <ArrowRight className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">Office requirement guidance</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <ArrowRight className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">Approximate cost breakdown</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <ArrowRight className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">Expected timeline</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <ArrowRight className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">Notes on compliance or restrictions</span>
                          </li>
                        </ul>
                        <p className="text-sm text-gray-600 mt-4 pl-7">User can download or email this pack.</p>
                      </div>
                    </CardContent>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </Card>

            {/* Alternative Path */}
            <Card className="bg-gradient-to-r from-purple-50 to-purple-100 border-purple-200 mt-6">
              <CardHeader>
                <CardTitle className="text-primary flex items-center gap-2">
                  <Info className="w-5 h-5" />
                  Alternative Path: Direct Company Formation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-3">For businesses that prefer end-to-end incorporation support:</p>
                <p className="text-sm text-primary font-semibold flex items-center gap-2">
                  <ArrowRight className="w-4 h-4" />
                  Proceed with <strong>Incorpify</strong> for fully managed company formation in your chosen jurisdiction.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

