const Contact = () => {
  return (
    <section>
      <div className="px-4 mx-auto max-w-screen-md">
        <h2 className="heading text-center">Contact Us</h2>

        <p className="mb-8 lg:mb-16 font-light text-center text_para">
          Want to know more about Us? Get in touch with us
        </p>
        <form action="#" className="space-y-8">
          {/* 1 */}
          <div>
            <label htmlFor="email" className="form_label">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="example@gamil.com"
              className="form_input mt-1 p-4 rounded"
            />
          </div>
          {/* 1 */}
          <div>
            <label htmlFor="email" className="form_label">
              Subject
            </label>
            <input
              type="subject"
              id="subject"
              placeholder="Let us know how we can help you."
              className="form_input mt-1 p-4 rounded"
            />
          </div>
          {/* 1 */}
          <div className="sm:col-span-2">
            <label htmlFor="email" className="form_label">
              Comment
            </label>
            <textarea
              rows={6}
              id="message"
              placeholder="Leave a comment..."
              className="form_input mt-1 p-4 rounded"
            />
          </div>
          <button type="submit" className="btn rounded sm:w-fit">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
