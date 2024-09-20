import { useState } from "react";
import { Button, Input, Textarea } from "@material-tailwind/react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <section
      className="py-10 px-5 sm:px-5 md:px-10 xl:px-20 mx-0 bg-main"
      dir="rtl"
    >
      <h1 className="text-white text-center text-5xl font-semibold leading-tight tracking-normal my-1 p-0">
        اتصل بنا
      </h1>

      <form
        onSubmit={handleSubmit}
        className="mt-8 max-w-lg mx-auto bg-secondary-back p-6 rounded-lg shadow-lg"
      >
        <div className="mb-4">
          <Input
            type="text"
            name="name"
            label="الاسم"
            value={formData.name}
            onChange={handleChange}
            color="blue"
            className="w-full text-right text-white"
            required
          />
        </div>

        <div className="mb-4">
          <Input
            type="email"
            name="email"
            label="البريد الإلكتروني"
            value={formData.email}
            onChange={handleChange}
            color="blue"
            className="w-full text-right text-white"
            required
          />
        </div>

        <div className="mb-6">
          <Textarea
            name="message"
            label="رسالتك"
            value={formData.message}
            onChange={handleChange}
            color="blue"
            className="w-full text-right text-white"
            required
          />
        </div>

        <Button
          type="submit"
          className="bg-secondary-text text-main-text hover:bg-main-hover w-full"
        >
          إرسال
        </Button>
      </form>
    </section>
  );
}
