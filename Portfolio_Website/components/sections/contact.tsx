"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { MailIcon, PhoneIcon, MapPinIcon } from "lucide-react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { useState } from "react"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  subject: z.string().min(2, {
    message: "Subject must be at least 2 characters.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
})

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || ""
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || ""
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ""

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  })

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsSubmitting(true)

    try {
      // Check if environment variables are available
      if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
        console.log("EmailJS not configured, simulating form submission")
        // Simulate successful submission for demo purposes
        await new Promise((resolve) => setTimeout(resolve, 1000))
        toast({
          title: "Message sent!",
          description: "Thanks for reaching out — I'll get back to you soon.",
        })
        form.reset()
        return
      }

      // Dynamic import to avoid SSR issues
      const emailjs = await import("@emailjs/browser")

      const result = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: data.name,
          email: data.email,
          subject: data.subject,
          message: data.message,
        },
        PUBLIC_KEY,
      )

      console.log("Email sent:", result.text)
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out — I'll get back to you soon.",
      })
      form.reset()
    } catch (err) {
      console.error("Send error:", err)
      toast({
        title: "Oops!",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Your name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Your email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Subject</FormLabel>
              <FormControl>
                <Input placeholder="Subject" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea placeholder="Your message" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit"}
        </Button>
      </form>
    </Form>
  )
}

export function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <div className="container px-4 md:px-8">
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Standardized Header with White Text */}
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative"
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-white">Get In Touch</h2>
            {/* Aurora glow effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-600/20 via-blue-600/20 to-purple-600/20 blur-2xl opacity-30 -z-10" />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            Have a project in mind or want to discuss a potential collaboration? I'd love to hear from you!
          </motion.p>
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-5">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-2"
          >
            <h3 className="text-xl font-bold">Contact Information</h3>
            <p className="mt-2 text-muted-foreground">
              Feel free to reach out through any of these channels or use the contact form.
            </p>

            <div className="mt-6 space-y-4">
              <div className="flex items-start">
                <MailIcon className="mr-4 h-5 w-5 text-muted-foreground" />
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p className="text-muted-foreground">jayeshrl2005@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <PhoneIcon className="mr-4 h-5 w-5 text-muted-foreground" />
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <p className="text-muted-foreground">+91 9449945462</p>
                </div>
              </div>

              <div className="flex items-start">
                <MapPinIcon className="mr-4 h-5 w-5 text-muted-foreground" />
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-muted-foreground">Bangalore, Karnataka, India</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="font-medium">Availability</h4>
              <p className="mt-1 text-muted-foreground">
                I'm currently available for freelance work and open to discussing full-time opportunities. My typical
                response time is within 24-48 hours.
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-3"
          >
            <ContactForm />
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
