import React from "react";

function LibraryFunctionality() {
  return (
    <div className="container mx-auto px-6 py-12">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#2b347c] mb-4">
          Library Functionality
        </h1>
        <p className="text-lg text-gray-700">
          Supporting libraries to improve their resources and reach.
        </p>
      </header>

      <section className="bg-white p-6 rounded-lg shadow-lg mb-12">
        <h2 className="text-3xl font-semibold text-[#2b347c] mb-4">
          Enhancing Libraries for All
        </h2>
        <p className="text-gray-700 mb-6">
          Libraries are the cornerstone of literacy-rich environments. As the
          gateway to knowledge and creativity, they provide invaluable resources
          to children, youth, and adults alike. However, many libraries—
          particularly in rural and economically disadvantaged areas—face
          challenges in providing the resources and services their communities
          need. These challenges may include outdated or insufficient materials,
          lack of technological infrastructure, or limited staff training.
        </p>
        <p className="text-gray-700 mb-6">
          Our <strong>Library Functionality programme</strong> is dedicated to
          enhancing libraries by improving their resources, increasing their
          accessibility, and expanding their reach, particularly in underserved
          areas. By upgrading libraries, we ensure that they can meet the
          evolving needs of their communities and continue to serve as essential
          resources for lifelong learning.
        </p>

        <h3 className="text-xl font-semibold text-[#2b347c] mb-4">
          Key Initiatives:
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>
            <strong>Donating Books and Educational Materials to Libraries:</strong>{" "}
            Access to books and educational materials is fundamental to the
            success of any library. Unfortunately, many libraries—especially those
            in underserved regions—struggle to maintain a diverse and up-to-date
            collection due to financial constraints. Our initiative focuses on
            directly donating books, educational resources, and multimedia
            materials to libraries in need. We partner with publishers, authors,
            and other stakeholders to gather and distribute high-quality books,
            including fiction, non-fiction, reference materials, and educational
            tools across various subjects and age groups.
          </li>
          <li>
            <strong>Training Library Staff to Create Engaging programmes:</strong> A
            library is only as strong as the people who run it. Library staff play
            a crucial role in shaping the overall experience and impact of the
            library on the community. Our programme focuses on enhancing the skills
            and knowledge of library staff through comprehensive training. We
            offer training sessions that focus on programme development, customer
            service, digital literacy, and event management, ensuring that library
            staff can better meet the needs of their communities and provide more
            innovative library services.
          </li>
          {/* <li>
            <strong>Building Digital Library Infrastructure for Rural Areas:</strong>{" "}
            In today’s digital age, access to technology is essential for
            education and personal development. However, many libraries in rural
            and remote areas face significant challenges in providing digital
            services due to limited internet connectivity and lack of
            infrastructure. Our initiative focuses on building the digital
            infrastructure necessary for libraries in these areas to thrive. This
            includes providing high-speed internet access, installing computer
            stations and digital tools, and offering digital literacy training for
            both library staff and community members. By helping rural libraries
            embrace technology, we close the digital divide and provide rural
            communities with the tools they need to succeed in a digital world.
          </li> */}
        </ul>
      </section>

      <section className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold text-[#2b347c] mb-4">
          The Broader Impact of Enhanced Libraries
        </h3>
        <p className="text-gray-700 mb-6">
          Enhancing library functionality does more than just improve access to
          books and digital resources—it helps empower communities to build a
          brighter future. Libraries are a critical part of the educational
          ecosystem, and when they are properly supported, they play a
          significant role in improving literacy rates, fostering community
          engagement, and promoting lifelong learning. Libraries also provide a
          safe, welcoming space where individuals can explore new ideas, develop
          new skills, and connect with others. For children and youth, libraries
          are particularly important, offering a space for academic support,
          creative exploration, and social development.
        </p>
        <p className="text-gray-700 mb-6">
          By enhancing libraries, we provide individuals with the tools to
          succeed academically, professionally, and personally. In addition,
          libraries foster community engagement and collaboration, making them a
          vital resource for developing stronger, more connected communities. We
          believe that by investing in libraries, we are investing in the future
          of individuals and communities worldwide.
        </p>
      </section>
    </div>
  );
}

export default LibraryFunctionality;
