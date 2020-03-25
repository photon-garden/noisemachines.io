<script>
  import Resume from "../../components/Resume/index.svelte"
  import logo from "./logo.svelte"

  const name = `Paul Prae`
  const jobTitle = `Artificial Intelligence Systems Architect`
  const location = `Atlanta, GA`
  const website = `https://www.paulprae.com`
  const email = `paul.prae@outlook.com`

  const intro = `I strive to make the most positive impact on existence as possible. I'm a technical leader with over ten years of experience designing and building enterprise-ready machine learning, natural language processing, and data science systems. No matter the complexity, no matter the challenge, my teams deliver.`

  const positions = [
    {
      jobTitle: "Solutions\nArchitect",
      employer: "Amazon Web Services",
      location: "Atlanta, GA",
      description:
        "Provide senior technical leadership prescriptive guidance, best practices, and assistance in designing and building systems on AWS that are secure, scalable, reliable, and performant."
    },
    {
      jobTitle: "Senior\nAI Engineer",
      employer: "NeuroLex",
      location: "Atlanta, GA",
      description:
        "Architected and developed software applications, web services, and data pipelines to make voice computing accessible to everyone. Designed automated machine learning workflows that collected data, cleaned data, trained models, and deployed models."
    },
    {
      jobTitle: "Advanced\nAnalytics\nConsultant",
      employer: "Slalom Consulting",
      location: "Atlanta, GA",
      description:
        "Operationalized data science experiments and data science teams. I collected, transferred, stored, explored, and prepared data."
    }
  ]

  const projects = [
    {
      name: "Demand Forecasting of Healthcare Services",
      description:
        "In order to reduce costs, optimize staffing, and support the budgeting process, my team predicted demand for behavioral health crisis services in dozens of facilities across the state of Georgia."
    },
    {
      name: "Behavioral Healthcare Service Review Application",
      description:
        "This app provided nurses and behavioral staff an easy way to collect data. Leadership used our data visualizations and reports to influence their strategy and operations so they could improve the quality of care patients receive."
    },
    {
      name: "Demand Forecasting of Healthcare Services",
      description:
        "Using real world data from www.healthdata.gov, I built and demonstrated an experiment that predicts the outcomes of patients who went through substance abuse treatment."
    }
  ]

  const skills = {
    technology: [
      "AWS AI and ML Services",
      "AWS Data Services",
      "Microsoft Azure Cognitive Services",
      "Python",
      "R",
      "SQL",
      "Java",
      "C#",
      "MongoDB",
      "Apache Kafka"
    ],
    techniques: [
      "Machine Learning",
      "Natural Language Processing",
      "The Data Science Process",
      "Agile Software Development",
      "Cloud Operations",
      "Data Management",
      "Evolutionary Computation",
      "Knowledge-Based AI",
      "Distributed Computing",
      "Message-Driven Systems"
    ]
  }

  const educationalExperiences = [
    {
      institutionName: "The University\nof Georgia",
      location: "Athens, GA",
      qualifications: [
        {
          name: "Bachelor of Arts in Cognitive Science",
          detail: "with a Focused Foundation in Artificial Intelligence"
        },
        {
          name: "Bachelor of Science in Computer Science",
          detail: "with an Area of Emphasis in Artificial Intelligence"
        }
      ]
    }
  ]

  const paul = {
    name,
    jobTitle,
    location,
    website,
    email,
    logo,
    intro,

    positions,
    projects,
    skills,
    educationalExperiences
  }
</script>

<Resume person={paul} />
