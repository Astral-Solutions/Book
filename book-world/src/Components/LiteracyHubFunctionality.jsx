import React from "react";

function LiteracyHubFunctionality() {
  return (
    <div className="container mx-auto px-6 py-12">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#2b347c] mb-4">
          Literacy Hub Functionality
        </h1>
        <section className="text-center mb-12">
          <img
            src="/images/LibFun.jpg"
            alt="Literacy Hub Functionality Lead"
            loading="lazy"
            className="mx-auto w-full sm:max-w-sm md:max-w-md lg:max-w-lg h-auto object-cover shadow-lg border-4 border-white rounded-lg"
          />
        </section>
        <p className="text-lg text-gray-700">
          Supporting literacy hubs to improve their reach, resources, and community impact.
        </p>
      </header>

      <section className="bg-white p-6 rounded-lg shadow-lg mb-12">
        <h2 className="text-3xl font-semibold text-[#2b347c] mb-4">
          Enhancing Literacy Hubs for All
        </h2>
        <p className="text-gray-700 mb-6">
          Literacy hubs are community-driven spaces that promote reading, storytelling, learning,
          and access to books in safe, welcoming environments. In underserved and rural areas,
          these hubs are often more accessible than traditional libraries and play a crucial role in
          nurturing a culture of literacy. However, many hubs struggle due to limited resources,
          staffing, and infrastructure.
        </p>
        <p className="text-gray-700 mb-6">
          Our <strong>Literacy Hub Functionality function</strong> is dedicated to upgrading these hubs,
          ensuring they are equipped to deliver effective and inclusive literacy support. By
          improving facilities, training staff, and expanding access to quality books and materials,
          we enable literacy hubs to become dynamic centers of lifelong learning, community building,
          and youth development.
        </p>

        <h3 className="text-xl font-semibold text-[#2b347c] mb-4">
          Key Initiatives:
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>
            <strong>Donating Books and Educational Materials to Literacy Hubs:</strong>{" "}
            Many literacy hubs struggle to maintain a diverse and updated collection of reading
            materials. We partner with publishers, schools, and donors to supply high-quality
            fiction, non-fiction, and educational books tailored to local languages and contexts.
            These materials help foster curiosity, comprehension, and a love for reading among
            children and youth.
          </li>
          <li>
            <strong>Training Literacy Hub Coordinators and Volunteers:</strong> Literacy hubs are most
            effective when run by passionate, well-equipped individuals. We provide capacity-building
            workshops focused on programme design, child engagement strategies, digital literacy,
            and event coordination. This ensures that literacy hub leaders are able to run vibrant
            and inclusive programmes that meet the evolving needs of their communities.
          </li>
        </ul>
      </section>

      <section className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold text-[#2b347c] mb-4">
          The Broader Impact of Strengthened Literacy Hubs
        </h3>
        <p className="text-gray-700 mb-6">
          Strengthening literacy hubs goes beyond improving access to books , it creates a localised
          ecosystem for literacy development. These hubs become focal points for school partnerships,
          parental involvement, and intergenerational learning. Whether it’s weekend storytime,
          after-school reading clubs, or poetry slams, literacy hubs create a consistent space for
          discovery, imagination, and learning outside the traditional classroom.
        </p>
        <p className="text-gray-700 mb-6">
          For youth and children, literacy hubs offer an inclusive space to grow , academically,
          emotionally, and socially. They serve as pillars of resilience in communities that face
          challenges such as poverty, lack of infrastructure, and limited access to formal education
          resources. By investing in literacy hubs, we invest in people, in place-making, and in
          community-led solutions to the literacy crisis.
        </p>
      </section>
    </div>
  );
}

export default LiteracyHubFunctionality;
