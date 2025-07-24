

import React from 'react'
import Swal from 'sweetalert2'

export default function Contact() {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "6a874493-cc0d-4c40-92b4-955cd5aeda66");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      event.target.reset();
      Swal.fire({
        title: "Success!",
        text: "Your message has been sent successfully!",
        icon: "success"
      });
    }
  };

  return (
    <section className="flex justify-center items-center py-10 px-4">
      <form
        onSubmit={onSubmit}
        className="w-full max-w-3xl bg-black dark:bg-gradient-to-r from-cyan-500 to-teal-500 text-white dark:text-black p-6 md:p-10 rounded-lg"
      >
        <div className="mb-6">
          <label className="block mb-2">Full Name</label>
          <input
            type="text"
            name="fullName"
            placeholder="Enter your full name"
            required
            className="w-full p-3 rounded-md text-black"
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            className="w-full p-3 rounded-md text-black"
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2">Your Message</label>
          <textarea
            name="message"
            placeholder="Enter your message"
            required
            rows="5"
            className="w-full p-3 rounded-md text-black"
          ></textarea>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-gradient-to-r from-cyan-500 to-teal-500 dark:from-black dark:to-black text-white py-3 px-6 rounded-md"
          >
            Send Message
          </button>
        </div>
      </form>
    </section>
  );
}
