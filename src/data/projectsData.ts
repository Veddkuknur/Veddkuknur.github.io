const projectData = [
  {
    name: "MediCheck",
    url: "https://github.com/A-D-I-T-C/medicheck",
    description:
      "AI-powered web platform to streamline patient-clinician interactions. Patients manage health records, fill forms, and interact via a voice-enabled chatbot, while clinicians access session data and documents in one place.",
    points: [
      "Integrates Whisper for voice-to-voice interaction.",
      "Chatbot powered by DeepSeek and Llama 3.2, running on self-hosted servers for secure responses.",
      "Employs a RAG pipeline with AstraDB for vector search.",
      "Built using TypeScript, Next.js, React, Tailwind, and Python.",
      "AI models deployed on Google Cloud and self-hosted infrastructure.",
      "🏆 Won 3rd in HackED hackathon 🏆",
    ],
    techStack: [
      "Next.js",
      "React",
      "Node.js",
      "OpenAI API",
      "AstraDB",
      "PostgreSQL",
    ],
  },
  {
    name: "Gazprea Compiler",
    url: "https://github.com/Veddkuknur/Gazprea-Compiler",
    description:
      "Custom compiler for the Gazprea domain-specific language (DSL) built in C++ with LLVM and MLIR. Incorporates a parser (ANTLR), semantic analysis, and optimized code generation (including advanced matrix operations), showcasing a high-performance compiler design.",
    points: [
      "Utilizes MLIR and LLVM for compiler infrastructure.",
      "Implements optimized matrix operations.",
      "Includes a parser built with ANTLR for syntax analysis.",
    ],
    techStack: ["C++", "LLVM", "MLIR", "ANTLR"],
  },
  {
    name: "Social Distribution",
    url: "https://github.com/Veddkuknur/Social-Distribution",
    description:
      "Distributed social networking platform built with Django that enables a federated social media experience. Implements RESTful APIs for inter-node communication using an inbox model to share posts across servers, allowing users on different nodes to follow and interact with each other.",
    points: [
      "Supports federated social networking with inter-node communication.",
      "Implements an inbox model for sharing posts across servers.",
      "Allows users on different nodes to follow and interact with each other.",
    ],
    techStack: ["Python", "Django", "REST API", "PostgreSQL"],
  },{
    name: "QR-GO Mobile Game",
    url: "http://github.com/CMPUT301W23T25/QR-Go-Gotta-Scan-Em-All",
    description:
      "Android-based mobile game that incentivizes social interaction and physical activity by enabling users to scan and collect QR codes across real-world locations.",
    points: [
      "Engineered an Android application that incentivizes social interaction and physical exercise through gamification, leveraging QR code collection as a core gameplay mechanic.",
      "Gained expertise in utilizing the Google Maps API and implemented maps functionality to show scanned QR code locations.",
      "Optimized load times and reduced crashes by 60% using threading and asynchronous programming in Java.",
    ],
    techStack: ["Java", "Android Studio", "Gradle", "GCP", "Google Maps SDK", "Firebase"],
  },
  {
    name: "Custom GAN Image Generator",
    url: "https://github.com/Veddkuknur/custom_GAN",
    description:
      "Deep learning project implementing a custom Generative Adversarial Network for multi-class image generation. Trains a custom generator and discriminator (with a 32x32 output) from scratch, instead of using a standard DCGAN architecture, to produce realistic small images and explore GAN training techniques.",
    points: [
      "Designs and implements a custom GAN architecture from scratch.",
      "Focuses on generating 32x32 pixel images across multiple classes.",
      "Explores training techniques for GANs without relying on standard architectures.",
    ],
    techStack: ["Python", "PyTorch", "GAN"],
  },
  {
    name: "Custom YOLOv5 Object Detector",
    url: "https://github.com/Veddkuknur/custom_YOLOv5",
    description:
      "Computer vision project reimplementing the YOLOv5 object detection model. Involves building a YOLOv5-like neural network to detect multiple objects in images and training it on example data, providing hands-on experience with the YOLO architecture and object detection pipeline.",
    points: [
      "Reimplements the YOLOv5 object detection model from scratch.",
      "Trains the model on custom datasets for multi-object detection.",
      "Provides practical experience with the YOLO architecture and object detection pipeline.",
    ],
    techStack: ["Python", "PyTorch", "Jupyter Notebook", "Computer Vision"],
  },
  {
    name: "Carbon Footprint Calculator (Android)",
    url: "https://github.com/Veddkuknur/Caronfootprint-calculatorApp",
    description:
      "Mobile app that estimates a user's carbon footprint based on their daily activities and resource usage. Built for Android in Java, it allows users to input data (like travel, energy consumption, etc.) and calculates corresponding carbon emissions to promote awareness of environmental impact.",
    points: [
      "Developed an Android app to calculate users' carbon footprints.",
      "Allows input of daily activities and resource usage to estimate emissions.",
      "Promotes environmental awareness through personalized feedback.",
    ],
    techStack: ["Java", "Android", "Gradle"],
  },
];

export default projectData;
