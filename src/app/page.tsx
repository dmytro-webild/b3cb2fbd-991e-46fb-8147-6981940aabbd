"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FaqBase from '@/components/sections/faq/FaqBase';
import FeatureCardTwentyThree from '@/components/sections/feature/FeatureCardTwentyThree';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import HeroLogo from '@/components/sections/hero/HeroLogo';
import MetricCardThree from '@/components/sections/metrics/MetricCardThree';
import MetricSplitMediaAbout from '@/components/sections/about/MetricSplitMediaAbout';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import PricingCardTwo from '@/components/sections/pricing/PricingCardTwo';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import TestimonialCardSix from '@/components/sections/testimonial/TestimonialCardSix';
import { Award, Car, Diamond, DollarSign, Gauge, HelpCircle, MessageSquare, Package, Sparkles, Star, Target, Users, Wallet } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="directional-hover"
        defaultTextAnimation="entrance-slide"
        borderRadius="soft"
        contentWidth="smallMedium"
        sizing="largeSizeMediumTitles"
        background="aurora"
        cardStyle="subtle-shadow"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="glass"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleFullscreen
      navItems={[
        {
          name: "Home",          id: "#hero"},
        {
          name: "About",          id: "#about"},
        {
          name: "Services",          id: "#services"},
        {
          name: "Packages",          id: "#packages"},
        {
          name: "Pricing",          id: "#pricing"},
        {
          name: "Results",          id: "#results"},
        {
          name: "Testimonials",          id: "#testimonials"},
        {
          name: "FAQ",          id: "#faq"},
        {
          name: "Contact",          id: "#contact"},
      ]}
      logoSrc="http://img.b2bpic.net/free-vector/gradient-detailing-logo-template_23-2149343862.jpg"
      logoAlt="Detailing Brat Logo"
      brandName="Detailing Brat"
      bottomLeftText="Brat Detailing Excellence"
      bottomRightText="bookings@detailingbrat.com"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroLogo
      logoText="Detailing Brat"
      description="Unleash the Inner Shine: We make your car look so good, it's almost illegal. Precision detailing for those who demand perfection."
      buttons={[
        {
          text: "Book Now",          href: "#contact"},
        {
          text: "View Services",          href: "#services"},
      ]}
      buttonAnimation="opacity"
      imageSrc="http://img.b2bpic.net/free-photo/beautiful-car-washing-service_23-2149212227.jpg"
      imageAlt="A luxury car getting a high-pressure wash, sparkling clean"
      showDimOverlay={true}
    />
  </div>

  <div id="about" data-section="about">
      <MetricSplitMediaAbout
      useInvertedBackground={true}
      title="Obsessed with Perfection, Driven by Detail"
      description="At Detailing Brat, we don't just clean cars—we transform them. Our passion for automotive aesthetics means every inch of your vehicle receives meticulous care, using only the finest products and techniques. Experience the difference of true craftsmanship."
      metrics={[
        {
          value: "10+",          title: "Years Experience"},
        {
          value: "5000+",          title: "Cars Detailed"},
        {
          value: "99%",          title: "Client Satisfaction"},
      ]}
      tag="Our Story"
      tagIcon={Sparkles}
      imageSrc="http://img.b2bpic.net/free-photo/man-white-shirt-wipes-car-car-wash_1157-27233.jpg"
      imageAlt="Professional applying ceramic coating to a car's hood"
      mediaAnimation="slide-up"
      metricsAnimation="blur-reveal"
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardTwentyThree
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          id: "s1",          title: "Exterior Wash & Wax",          tags: [
            "Shine",            "Protection",            "Quick"],
          imageSrc: "http://img.b2bpic.net/free-photo/water-splashing-near-foam_23-2147798203.jpg",          imageAlt: "Car getting a foam wash, close up of bubbles"},
        {
          id: "s2",          title: "Interior Deep Clean",          tags: [
            "Sanitized",            "Fresh",            "Thorough"],
          imageSrc: "http://img.b2bpic.net/free-photo/luxury-car-interior_146671-19729.jpg",          imageAlt: "Clean car interior, sparkling dashboard"},
        {
          id: "s3",          title: "Wheel & Tire Care",          tags: [
            "Gloss",            "Restored",            "Protected"],
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-man-swapping-wheel_23-2148254116.jpg",          imageAlt: "Shiny car wheel after professional cleaning"},
        {
          id: "s4",          title: "Paint Correction",          tags: [
            "Flawless",            "Restore",            "Gloss"],
          imageSrc: "http://img.b2bpic.net/free-photo/car-wrapping-with-foil-car-service_1303-32335.jpg",          imageAlt: "Buffing machine on car paint, removing swirl marks"},
      ]}
      title="Our Signature Detailing Services"
      description="From a quick refresh to a complete rejuvenation, our expert team provides a range of services designed to bring out the best in your ride. Prepare for a jaw-dropping transformation."
      tag="What We Do"
      tagIcon={Car}
    />
  </div>

  <div id="packages" data-section="packages">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={true}
      products={[
        {
          id: "p1",          name: "The Quick Glaze",          price: "$99",          imageSrc: "http://img.b2bpic.net/free-photo/close-up-car-care-process_23-2149193627.jpg",          imageAlt: "Basic car wash with a quick glaze finish"},
        {
          id: "p2",          name: "The Executive Shine",          price: "$249",          imageSrc: "http://img.b2bpic.net/free-photo/two-stylish-women-car-salon_1157-20863.jpg",          imageAlt: "Premium car interior detailing"},
        {
          id: "p3",          name: "The Ultimate Transformation",          price: "$499",          imageSrc: "http://img.b2bpic.net/free-photo/car-wrapping-with-foil-car-service_1303-32341.jpg",          imageAlt: "Supercar getting ceramic coating"},
        {
          id: "p4",          name: "Interior Refresh",          price: "$149",          imageSrc: "http://img.b2bpic.net/free-photo/close-up-person-cleaning-car-interior_23-2148194078.jpg",          imageAlt: "Detailed car cabin with clean seats"},
        {
          id: "p5",          name: "Exterior Shield",          price: "$179",          imageSrc: "http://img.b2bpic.net/free-photo/bubbles-light-blue-foam_23-2147797982.jpg",          imageAlt: "Car exterior after professional wash and wax"},
        {
          id: "p6",          name: "Wheel & Caliper Detail",          price: "$89",          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-young-female-mechanic-working_23-2148327575.jpg",          imageAlt: "Close-up of clean car wheel"},
      ]}
      title="Unbeatable Detailing Packages"
      description="Choose from our curated packages designed for every need and budget. Each package guarantees a level of shine and protection that will turn heads."
      tag="Our Offerings"
      tagIcon={Package}
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardTwo
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      plans={[
        {
          id: "price-basic",          badge: "Value",          badgeIcon: DollarSign,
          price: "$99",          subtitle: "Essential clean-up for daily drivers.",          buttons: [
            {
              text: "Select Basic",              href: "#contact"},
          ],
          features: [
            "Exterior Hand Wash",            "Tire Shine & Rim Clean",            "Interior Vacuum",            "Window Cleaning"],
        },
        {
          id: "price-pro",          badge: "Popular",          badgeIcon: Star,
          price: "$249",          subtitle: "Deep clean and protection for a lasting shine.",          buttons: [
            {
              text: "Select Pro",              href: "#contact"},
          ],
          features: [
            "All Basic Features",            "Carnauba Wax Application",            "Full Interior Wipe Down",            "Leather/Fabric Conditioning",            "Air Freshener Treatment"],
        },
        {
          id: "price-ultimate",          badge: "Best Value",          badgeIcon: Diamond,
          price: "$499",          subtitle: "The ultimate transformation for enthusiasts.",          buttons: [
            {
              text: "Select Ultimate",              href: "#contact"},
          ],
          features: [
            "All Pro Features",            "Single-Stage Paint Correction",            "Ceramic Sealant (6-Month)",            "Engine Bay Detail",            "Headlight Restoration"],
        },
      ]}
      title="Straightforward Pricing, Brilliant Results"
      description="No hidden fees, just crystal-clear pricing for exceptional detailing. Find the perfect plan that fits your car's needs and your budget."
      tag="Pricing Plans"
      tagIcon={Wallet}
    />
  </div>

  <div id="results" data-section="results">
      <MetricCardThree
      textboxLayout="default"
      useInvertedBackground={true}
      animationType="slide-up"
      metrics={[
        {
          id: "m1",          icon: Gauge,
          title: "Speedy Service",          value: "2 Hours Avg."},
        {
          id: "m2",          icon: Sparkles,
          title: "Gleaming Finishes",          value: "100% Shine"},
        {
          id: "m3",          icon: Award,
          title: "Top Rated",          value: "5-Star Reviews"},
        {
          id: "m4",          icon: Users,
          title: "Happy Clients",          value: "Thousands Strong"},
      ]}
      title="Results That Speak Volumes"
      description="Our commitment to excellence translates into incredible transformations and satisfied clients. See the numbers behind our sparkle!"
      tag="Our Impact"
      tagIcon={Target}
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSix
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "t1",          name: "Sarah J.",          handle: "@ShinySarah",          testimonial: "Absolutely blown away! My car looks better than it did the day I drove it off the lot. Detailing Brat is simply the best.",          imageSrc: "http://img.b2bpic.net/free-photo/confident-successful-middle-aged-business-leader_1262-4872.jpg",          imageAlt: "Smiling woman, satisfied customer"},
        {
          id: "t2",          name: "Mark P.",          handle: "@DetailFreak",          testimonial: "The paint correction was phenomenal. Every swirl mark gone, replaced by an incredible depth of shine. True artists!",          imageSrc: "http://img.b2bpic.net/free-photo/smiley-woman-enjoying-road-trip-her-car_23-2148801471.jpg",          imageAlt: "Man giving thumbs up next to his clean car"},
        {
          id: "t3",          name: "Emily R.",          handle: "@CarLover",          testimonial: "My interior feels brand new. Every crevice, every surface, impeccably clean. It's like a spa day for my car!",          imageSrc: "http://img.b2bpic.net/free-photo/man-white-shirt-wipes-car-car-wash_1157-27341.jpg",          imageAlt: "Woman pointing at her car's shine"},
        {
          id: "t4",          name: "David K.",          handle: "@SpeedDemon",          testimonial: "Quick, efficient, and incredibly detailed. They respect your time and deliver outstanding results every single time. Highly recommend!",          imageSrc: "http://img.b2bpic.net/free-photo/young-woman-with-pen-table_23-2147844684.jpg",          imageAlt: "Happy man with car keys"},
        {
          id: "t5",          name: "Jessica L.",          handle: "@LuxuryRides",          testimonial: "I trust Detailing Brat with all my luxury vehicles. Their ceramic coating is top-tier and lasts for months. Unmatched quality!",          imageSrc: "http://img.b2bpic.net/free-photo/rich-indian-diplomat-businessman-formal-wear-standing-against-business-suv-car_627829-766.jpg",          imageAlt: "Woman with luxury car"},
      ]}
      title="What Our Clients RAVE About"
      description="Don't just take our word for it. Hear directly from the proud owners of cars transformed by Detailing Brat!"
      tag="Happy Customers"
      tagIcon={MessageSquare}
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqBase
      textboxLayout="default"
      useInvertedBackground={true}
      faqs={[
        {
          id: "faq1",          title: "How long does a typical detailing service take?",          content: "Most of our standard detailing packages can be completed within 2-4 hours. More intensive services like paint correction or ceramic coating may require a full day or overnight."},
        {
          id: "faq2",          title: "What's the difference between a wash and a detail?",          content: "A wash is a superficial clean, while a detail is a thorough, systematic cleaning and restoration process of your vehicle, both inside and out, aiming to bring it back to its best possible condition."},
        {
          id: "faq3",          title: "Do I need to book an appointment in advance?",          content: "Yes, we highly recommend booking an appointment to ensure we can dedicate the proper time and resources to your vehicle. Walk-ins are subject to availability."},
        {
          id: "faq4",          title: "What products do you use for detailing?",          content: "We only use premium, professional-grade detailing products that are safe for your vehicle's surfaces and effective in delivering a superior clean and lasting protection."},
        {
          id: "faq5",          title: "Do you offer mobile detailing services?",          content: "Currently, we operate from our state-of-the-art detailing studio to ensure optimal conditions for all services. Mobile services may be introduced in the future."},
      ]}
      title="Got Questions? We've Got Answers!"
      description="Find quick answers to the most common questions about our car detailing services, booking, and care tips."
      tag="FAQs"
      tagIcon={HelpCircle}
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={false}
      title="Ready for a Showroom Finish?"
      description="Connect with us to schedule your detailing appointment or inquire about custom services. Let's make your car sparkle!"
      inputs={[
        {
          name: "name",          type: "text",          placeholder: "Your Name",          required: true,
        },
        {
          name: "email",          type: "email",          placeholder: "Your Email",          required: true,
        },
        {
          name: "phone",          type: "tel",          placeholder: "Phone Number (Optional)"},
      ]}
      multiSelect={{
        name: "service",        label: "Desired Service",        options: [
          "Quick Glaze",          "Executive Shine",          "Ultimate Transformation",          "Interior Deep Clean",          "Paint Correction"],
      }}
      textarea={{
        name: "message",        placeholder: "Tell us about your car and needs...",        rows: 4,
      }}
      imageSrc="http://img.b2bpic.net/free-photo/close-up-view-barber-shop-accesories_23-2148506358.jpg"
      imageAlt="Car detailing tools and equipment neatly organized"
      mediaPosition="right"
      buttonText="Send Inquiry"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseCard
      logoText="Detailing Brat"
      columns={[
        {
          title: "Services",          items: [
            {
              label: "Exterior Detail",              href: "#services"},
            {
              label: "Interior Detail",              href: "#services"},
            {
              label: "Paint Correction",              href: "#services"},
            {
              label: "Ceramic Coating",              href: "#packages"},
          ],
        },
        {
          title: "Company",          items: [
            {
              label: "About Us",              href: "#about"},
            {
              label: "Our Process",              href: "#results"},
            {
              label: "Testimonials",              href: "#testimonials"},
            {
              label: "FAQ",              href: "#faq"},
          ],
        },
        {
          title: "Contact",          items: [
            {
              label: "Book Now",              href: "#contact"},
            {
              label: "Email Us",              href: "mailto:info@detailingbrat.com"},
            {
              label: "Call Us",              href: "tel:+1234567890"},
          ],
        },
      ]}
      copyrightText="© 2024 Detailing Brat. All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
