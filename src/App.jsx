import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { TrendingUp, Shield, Users, BarChart3, Phone, Mail, MapPin, Star, ArrowRight, CheckCircle, Menu, X } from 'lucide-react'
import './App.css'
import heroBg from './assets/hero-bg.jpg'
import chartsBg from './assets/charts-bg.png'
import professionalBg from './assets/professional-bg.jpg'
import indianStockBg from './assets/indian-stock-bg.jpg'
import kumarImg from './assets/kumar.jpg'
import rajivImg from './assets/rajiv.jpg'
import logo from './assets/logo.jpeg'
import logoExtension from './assets/Logo extension.jpeg'

function App() {
  const [activeTab, setActiveTab] = useState('home')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const services = [
    {
      icon: <TrendingUp className="h-8 w-8 text-blue-600" />,
      title: "Wealth Management",
      description: "We manage and grow your wealth through expert stock market strategies.",
      features: ["Personalized investment plans", "Long-term wealth generation", "Risk management"]
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-green-600" />,
      title: "High-Return Strategies",
      description: "We trade and invest on your behalf to maximize profits.",
      features: ["Active portfolio management", "Market timing expertise", "Profit-focused approach"]
    },
    {
      icon: <Shield className="h-8 w-8 text-purple-600" />,
      title: "Research & Analysis",
      description: "In-depth market research and analysis for informed investment decisions.",
      features: ["Market reports", "Stock analysis", "Economic insights"]
    },
    {
      icon: <Shield className="h-8 w-8 text-orange-600" />,
      title: "Insurance Services",
      description: "Comprehensive insurance for vehicles, health, and life.",
      features: ["Vehicle insurance", "Health insurance", "Term insurance"]
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-pink-600" />,
      title: "Real Estate",
      description: "Assistance with buying, selling, and investing in real estate.",
      features: ["Property advisory", "Local expertise", "Transparent process"]
    }
  ]

  const testimonials = [
    {
      name: "R. Kumar",
      role: "Business Owner, Coimbatore",
      content: "Stone Bench has consistently delivered strong returns and peace of mind. I trust them to grow my wealth for the long term.",
      rating: 5
    },
    {
      name: "Priya S.",
      role: "Retired Professional",
      content: "Their team handles everything. I just see my investments grow year after year.",
      rating: 5
    },
    {
      name: "S. Ramesh",
      role: "Entrepreneur",
      content: "Professional, transparent, and focused on results. Highly recommended for anyone seeking wealth creation.",
      rating: 5
    }
  ]

  const pricingPlans = [
    {
      name: "Standard",
      price: "1%",
      period: " annual fee",
      description: "Simple, transparent fee structure",
      features: [
        "No hidden charges",
        "Performance-focused management",
        "Regular reporting",
        "Personalized support"
      ],
      popular: false
    },
    {
      name: "Premium",
      price: "2%",
      period: " annual fee",
      description: "For clients seeking advanced strategies",
      features: [
        "All Standard features",
        "Priority support",
        "Access to exclusive strategies",
        "Dedicated relationship manager"
      ],
      popular: true
    }
  ]

  const Navigation = () => (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <img src={logo} alt="Stone Bench Logo" className="h-8 w-8" />
              <span className="ml-2 text-2xl font-bold text-gray-900">Stone Bench</span>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => setActiveTab('home')}
              className={`px-3 py-2 text-sm font-medium ${activeTab === 'home' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
            >
              Home
            </button>
            <button
              onClick={() => setActiveTab('services')}
              className={`px-3 py-2 text-sm font-medium ${activeTab === 'services' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
            >
              Services
            </button>
            <button
              onClick={() => setActiveTab('pricing')}
              className={`px-3 py-2 text-sm font-medium ${activeTab === 'pricing' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
            >
              Pricing
            </button>
            <button
              onClick={() => setActiveTab('about')}
              className={`px-3 py-2 text-sm font-medium ${activeTab === 'about' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
            >
              About
            </button>
            <button
              onClick={() => setActiveTab('contact')}
              className={`px-3 py-2 text-sm font-medium ${activeTab === 'contact' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
            >
              Contact
            </button>
            <Button className="bg-blue-600 hover:bg-blue-700">
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              {mobileMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <button
                onClick={() => {
                  setActiveTab('home')
                  setMobileMenuOpen(false)
                }}
                className={`block px-3 py-2 text-base font-medium w-full text-left ${activeTab === 'home' ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'}`}
              >
                Home
              </button>
              <button
                onClick={() => {
                  setActiveTab('services')
                  setMobileMenuOpen(false)
                }}
                className={`block px-3 py-2 text-base font-medium w-full text-left ${activeTab === 'services' ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'}`}
              >
                Services
              </button>
              <button
                onClick={() => {
                  setActiveTab('pricing')
                  setMobileMenuOpen(false)
                }}
                className={`block px-3 py-2 text-base font-medium w-full text-left ${activeTab === 'pricing' ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'}`}
              >
                Pricing
              </button>
              <button
                onClick={() => {
                  setActiveTab('about')
                  setMobileMenuOpen(false)
                }}
                className={`block px-3 py-2 text-base font-medium w-full text-left ${activeTab === 'about' ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'}`}
              >
                About
              </button>
              <button
                onClick={() => {
                  setActiveTab('contact')
                  setMobileMenuOpen(false)
                }}
                className={`block px-3 py-2 text-base font-medium w-full text-left ${activeTab === 'contact' ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'}`}
              >
                Contact
              </button>
              <div className="px-3 py-2">
                <Button className="bg-blue-600 hover:bg-blue-700 w-full">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )

  const HeroSection = () => (
    <div className="relative bg-gradient-to-r from-blue-900 to-purple-900 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={indianStockBg}
          alt="Indian stock market background"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Grow Your Wealth,<span className="text-blue-400"> Stress-Free</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            We invest and trade on your behalf for high profit and long-term wealth generation. Let our experts handle the market while you focus on your life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3">
              Start Growing
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              className="bg-white text-blue-700 border-white shadow-lg hover:bg-blue-700 hover:text-white hover:border-blue-700 text-lg px-8 py-3 transition-colors duration-200"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  )

  const StatsSection = () => (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-blue-600">₹10Cr+</div>
            <div className="text-gray-600">Assets Managed</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-green-600">5</div>
            <div className="text-gray-600">Years in Business</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-600">30+</div>
            <div className="text-gray-600">Clients</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-orange-600">Growing</div>
            <div className="text-gray-600">Community</div>
          </div>
        </div>
      </div>
    </div>
  )

  const ServicesSection = () => (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive investment solutions designed to help you achieve your financial goals
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-center w-16 h-16 bg-gray-100 rounded-lg mb-4">
                  {service.icon}
                </div>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )

  const TestimonialsSection = () => (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600">Trusted by thousands of investors worldwide</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )

  const PricingSection = () => (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Plan</h2>
          <p className="text-xl text-gray-600">Flexible pricing to match your investment style</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <Card key={index} className={`relative hover:shadow-lg transition-shadow ${plan.popular ? 'ring-2 ring-blue-600' : ''}`}>
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600">
                  Most Popular
                </Badge>
              )}
              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-500">{plan.period}</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className={`w-full ${plan.popular ? 'bg-blue-600 hover:bg-blue-700' : ''}`} variant={plan.popular ? 'default' : 'outline'}>
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )

  const AboutSection = () => (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">About Stone Bench</h2>
            <p className="text-lg text-gray-600 mb-6">
              Founded in 2020, Stone Bench is a local stock market, insurance, and real estate partner for Coimbatore and surrounding areas. We are a small, dedicated team passionate about helping our community grow wealth and secure their future.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Our mission is to empower local investors and families with honest advice, research, and support tailored to your needs. We focus on transparency, personal relationships, and steady growth for every client.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="flex items-center">
                <Users className="h-8 w-8 text-green-600 mr-3" />
                <div>
                  <div className="font-semibold">Local Team</div>
                  <div className="text-sm text-gray-500">Based in Coimbatore</div>
                </div>
              </div>
              <div className="flex items-center">
                <TrendingUp className="h-8 w-8 text-blue-600 mr-3" />
                <div>
                  <div className="font-semibold">Growing Together</div>
                  <div className="text-sm text-gray-500">Client-first approach</div>
                </div>
              </div>
            </div>
            {/* Founders Section */}
            <div className="mt-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Founders</h3>
              <div className="flex flex-col sm:flex-row gap-8">
                <div className="flex flex-col items-center bg-gray-50 rounded-lg shadow p-6 w-full sm:w-1/2">
                  <div className="flex justify-center items-center w-32 h-32 mb-4">
                    <img src={kumarImg} alt="Kumar" className="w-32 h-32 object-cover object-center rounded-full border-4 border-blue-100 shadow" />
                  </div>
                  <div className="text-xl font-semibold text-gray-900">Kumar</div>
                  <div className="text-gray-500 text-sm mt-1">Co-Founder</div>
                </div>
                <div className="flex flex-col items-center bg-gray-50 rounded-lg shadow p-6 w-full sm:w-1/2">
                  <div className="flex justify-center items-center w-32 h-32 mb-4">
                    <img src={rajivImg} alt="Rajiv" className="w-32 h-32 object-cover object-center rounded-full border-4 border-blue-100 shadow" />
                  </div>
                  <div className="text-xl font-semibold text-gray-900">Rajiv</div>
                  <div className="text-gray-500 text-sm mt-1">Co-Founder</div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img
              src={logoExtension}
              alt="Stone Bench Extended Logo"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  )

  const ContactSection = () => (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-600">Ready to start your investment journey? Contact us today.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <Phone className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Phone</h3>
              <p className="text-gray-600">+91 98765 43210</p>
              <p className="text-sm text-gray-500">Mon-Fri 9AM-6PM IST</p>
            </CardContent>
          </Card>
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <Mail className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p className="text-gray-600">contact@stonebench.in</p>
              <p className="text-sm text-gray-500">We reply within 1 business day</p>
            </CardContent>
          </Card>
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <MapPin className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Office</h3>
              <p className="text-gray-600">201, Lakshmi Complex</p>
              <p className="text-gray-600">Gandhipuram, Coimbatore 641012</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )

  const Footer = () => (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <img src={logo} alt="Stone Bench Logo" className="h-8 w-8" />
              <span className="ml-2 text-xl font-bold">Stone Bench</span>
            </div>
            <p className="text-gray-400">
              Your trusted local partner in stock market, insurance, real estate, and financial growth.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Stock Trading</li>
              <li>Portfolio Management</li>
              <li>Research & Analysis</li>
              <li>Insurance (Vehicle, Health, Term)</li>
              <li>Real Estate</li>
              <li>Investment Advisory</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li>About Us</li>
              <li>Careers</li>
              <li>Press</li>
              <li>Legal</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Help Center</li>
              <li>Contact Us</li>
              <li>Security</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Stone Bench. All rights reserved. Based in Coimbatore, Tamil Nadu.</p>
        </div>
      </div>
    </footer>
  )

  const renderContent = () => {
    switch (activeTab) {
      case 'services':
        return <ServicesSection />
      case 'pricing':
        return <PricingSection />
      case 'about':
        return <AboutSection />
      case 'contact':
        return <ContactSection />
      default:
        return (
          <>
            <HeroSection />
            <StatsSection />
            <ServicesSection />
            <TestimonialsSection />
          </>
        )
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      {renderContent()}
      <Footer />
    </div>
  )
}

export default App

