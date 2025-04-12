"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Mail, MapPin, Phone } from "lucide-react";

const ContactForm = () => {
  const [formType, setFormType] = useState("general");

  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal");

    const reveal = () => {
      revealElements.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
          element.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", reveal);
    // Initial check
    reveal();

    return () => {
      window.removeEventListener("scroll", reveal);
    };
  }, []);

  return (
    <section className="relative w-full py-12 pb-20 border-b bg-gradient-to-b from-white to-slate-50/80 overflow-hidden">
      {/* Geometric Decorative Elements */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute top-20 right-10 w-64 h-64 bg-primary/10 rounded-full blur-2xl"></div>
      <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-secondary/10 rounded-lg rotate-45"></div>
      <div className="absolute top-1/4 right-1/4 w-16 h-16 border-2 border-primary/20 rounded-lg rotate-12"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 border-4 border-primary/10 rounded-full"></div>

      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-8 lg:grid-cols-2 max-w-5xl mx-auto">
            <Card className="reveal fade-right shadow-xl hover:shadow-2xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm h-full">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>
                  Reach out to us through any of these channels
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4 hover:bg-primary/5 p-3 rounded-lg transition-all">
                  <Mail className="mt-0.5 h-5 w-5 text-primary" />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-sm text-muted-foreground">
                      info@woverasolutions.com
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 hover:bg-primary/5 p-3 rounded-lg transition-all">
                  <Phone className="mt-0.5 h-5 w-5 text-primary" />
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <p className="text-sm text-muted-foreground">
                      +251 910428013
                    </p>
                    <p className="text-sm text-muted-foreground">
                      +251 911084409
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 hover:bg-primary/5 p-3 rounded-lg transition-all">
                  <MapPin className="mt-0.5 h-5 w-5 text-primary" />
                  <div>
                    <h3 className="font-medium">Office</h3>
                    <p className="text-sm text-muted-foreground">
                      Wessen, Brix Building, 2nd floor, Addis Ababa, Ethiopia
                    </p>
                  </div>
                </div>

                <div className="pt-6 border-t hover:bg-primary/5 p-3 rounded-lg transition-all mt-3">
                  <h3 className="font-medium mb-2">Office Hours</h3>
                  <p className="text-sm text-muted-foreground">
                    Monday - Friday: 9:00 AM - 6:00 PM
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Saturday: 10:00 AM - 2:00 PM
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Sunday: Closed
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="reveal fade-left shadow-xl hover:shadow-2xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm h-full">
              <CardHeader>
                <CardTitle>Send us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we&apos;ll get back to you
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <RadioGroup
                  defaultValue="general"
                  className="flex flex-wrap gap-4 mb-4"
                  onValueChange={setFormType}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="general" id="general" />
                    <Label htmlFor="general">General Inquiry</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="product" id="product" />
                    <Label htmlFor="product">Product Information</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="service" id="service" />
                    <Label htmlFor="service">Service Request</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="support" id="support" />
                    <Label htmlFor="support">Technical Support</Label>
                  </div>
                </RadioGroup>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="first-name">First Name</Label>
                    <Input id="first-name" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name">Last Name</Label>
                    <Input id="last-name" placeholder="Doe" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john.doe@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone (Optional)</Label>
                  <Input id="phone" type="tel" placeholder="+251 912345678" />
                </div>

                {formType === "product" && (
                  <div className="space-y-2">
                    <Label htmlFor="product">Product</Label>
                    <Select>
                      <SelectTrigger id="product">
                        <SelectValue placeholder="Select a product" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="abal">Abal</SelectItem>
                        <SelectItem value="fidel">Fidel</SelectItem>
                        <SelectItem value="woverafund">WoveraFund</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                )}

                {formType === "service" && (
                  <div className="space-y-2">
                    <Label htmlFor="service">Service</Label>
                    <Select>
                      <SelectTrigger id="service">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="custom">
                          Custom Software Development
                        </SelectItem>
                        <SelectItem value="saas">
                          B2B SaaS Development
                        </SelectItem>
                        <SelectItem value="ai">
                          AI Workflow Solutions
                        </SelectItem>
                        <SelectItem value="consultancy">
                          Technology Consultancy
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                )}

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="How can we help you?"
                    className="min-h-[120px]"
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-primary hover:bg-primary/90 text-white transition-all duration-300">
                  Send Message
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
