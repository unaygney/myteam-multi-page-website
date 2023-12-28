"use client";
import React from "react";
import { CARDS, FORM_INPUTS } from "./constant";
import { Formik } from "formik";
import { validationSchema } from "./validationSchema";
import clsx from "clsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

function Form() {
  const notify = () => toast("Your message has been sent");
  return (
    <section className="bg-[#014e56] bg-form-2 md:bg-form-1 bg-no-repeat bg-right-bottom ">
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        theme="dark"
      />
      <div className="container mx-auto px-7 md:px-0 pb-[88px]">
        <div className="flex flex-col lg:flex-row gap-14">
          <div className="flex flex-col items-center lg:items-start text-white gap-4 mb-10">
            <h1 className="text-[40px] md:text-[64px md:leading-[56px] font-bold leading-10 ">
              Contact
            </h1>
            <h3 className="text-[32px] font-bold leading-[48px] text-[#f67e7e]">
              Ask us about
            </h3>
            <div className="flex flex-col gap-6">
              {CARDS.map((card) => (
                <div
                  key={card.id}
                  className="flex gap-6 text-white items-center"
                >
                  <div className=" w-[72px] h-[72px]">{card.image}</div>
                  <p className="text-lg font-bold leading-7 ">{card.content}</p>
                </div>
              ))}
            </div>
          </div>

          <Formik
            initialValues={{
              name: "",
              email: "",
              companyName: "",
              title: "",
              message: "",
            }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              notify();
              setTimeout(() => {
                resetForm();
                setSubmitting(false);
              }, 3000);
            }}
          >
            {(formik) => (
              <form className="lg:flex-1 " onSubmit={formik.handleSubmit}>
                <div className="flex flex-col gap-6 ">
                  {FORM_INPUTS.map((input) => (
                    <div key={input.id} className="flex flex-col ">
                      <input
                        type={input.type}
                        placeholder={input.placeholder}
                        className={clsx(
                          "bg-[#014e56] border-b px-[14px] pb-[17px]  outline-none caret-white text-white font-semibold",
                          {
                            "border-b border-green-500 ":
                              formik.touched[input.title] &&
                              !formik.errors[input.title],
                            "border-[#f67e7e] border-b placeholder:text-[#f67e7e] placeholder:text-opacity-60":
                              formik.touched[input.title] &&
                              formik.errors[input.title],
                          }
                        )}
                        {...formik.getFieldProps(input.title)}
                      />
                      {formik.touched[input.title] &&
                      formik.errors[input.title] ? (
                        <div className="text-[#F67E7E] text-[10px] italic font-bold leading-normal mt-2">
                          {formik.errors[input.title]}
                        </div>
                      ) : null}
                    </div>
                  ))}
                  <button
                    className={`bg-white w-[123px] h-12 rounded-3xl inline-flex items-center justify-center font-semibold text-lg leading-7 text-[#004047]  `}
                    type="submit"
                  >
                    submit
                  </button>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </section>
  );
}

export default Form;
