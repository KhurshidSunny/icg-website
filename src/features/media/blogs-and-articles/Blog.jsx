import React from "react";

export default function Blog() {
  return (
    <div className="container mx-auto px-6 lg:px-16 py-10">
      <div
        className="relative mb-16 max-w-[1408.96px] min-h-[427.22px] w-full h-full object-cover object-center flex items-center justify-center"
        style={{
          backgroundImage:
            'url("/assets/MediaNewsImages/blogs-and-updates/single-blog-cover.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 rounded-xl"></div>
        <h1 className="relative z-10 text-white text-lg lg:text-3xl font-bold md:text-[25px]">
          Single Blog Page
        </h1>
      </div>

      <div className="my-2">
        Lorem Ipsum Content: "Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Etiam vel sapien et est adipiscing commodo. Duis pharetra varius
        quam sit amet vulputate. Quisque mauris augue, molestie tincidunt
        condimentum vitae, gravida a libero."Lorem Ipsum Content: "Lorem ipsum
        dolor sit amet, consectetur adipiscing elit. Etiam vel sapien et est
        adipiscing commodo. Duis pharetra varius quam sit amet vulputate.
        Quisque mauris augue, molestie tincidunt condimentum vitae, gravida a
        libero."
      </div>

      <div
        className="relative mb-16 max-w-[1408.96px] min-h-[427.22px] w-full h-full object-cover object-center flex items-center justify-center"
        style={{
          backgroundImage:
            'url("/assets/MediaNewsImages/blogs-and-updates/blogs-second-img.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      <div>
        <h4 className="text-3xl font-bold">
          Section 1: Mega Plants –{" "}
          <span className="text-[#8AA823]">Pioneering at Scale</span>
        </h4>
        <ul className="list-disc mt-8 pl-6">
          <li>
            Lorem Ipsum Content: "Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Praesent tempor scelerisque velit, sed fermentum
            felis luctus in. Maximus consequat, massa vel sagittis blandit, elit
            elit porta est, nec laoreet nisi lectus ac nibh. Suspendisse
            potenti. Proin in ligula iaculis, viverra nulla a, vehicula risus."z
          </li>
        </ul>

        <h4 className="text-3xl font-bold mt-8">
          Section 2: Technology Licenses –{" "}
          <span className="text-[#8AA823]">Expanding Horizons</span>
        </h4>

        <div className="flex justify-between align-top gap-8">
          <ul className="list-disc mt-8 pl-6">
            <li>
              Lorem Ipsum Content: "Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Praesent tempor scelerisque velit, sed fermentum
              felis luctus in. Maximus consequat, massa vel sagittis blandit,
              elit elit porta est, nec laoreet nisi lectus ac nibh. Suspendisse
              potenti. Proin in ligula iaculis, viverra nulla a, vehicula
              risus."
            </li>
            <li>
              Lorem Ipsum Content: "Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Praesent tempor scelerisque velit, sed fermentum
              felis luctus in. Maximus consequat, massa vel sagittis blandit,
              elit elit porta est, nec laoreet nisi lectus ac nibh. Suspendisse
              potenti. Proin in ligula iaculis, viverra nulla a, vehicula
              risus."
            </li>
            <li>
              Lorem Ipsum Content: "Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Praesent tempor scelerisque velit, sed fermentum
              felis luctus in. Maximus consequat, massa vel sagittis blandit,
              elit elit porta est, nec laoreet nisi lectus ac nibh. Suspendisse
              potenti. Proin in ligula iaculis, viverra nulla a, vehicula
              risus."
            </li>
            <li>
              Lorem Ipsum Content: "Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Praesent tempor scelerisque velit, sed fermentum
              felis luctus in. Maximus consequat, massa vel sagittis blandit,
              elit elit porta est, nec laoreet nisi lectus ac nibh. Suspendisse
              potenti. Proin in ligula iaculis, viverra nulla a, vehicula
              risus."
            </li>
            <li>
              Lorem Ipsum Content: "Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Praesent tempor scelerisque velit, sed fermentum
              felis luctus in. Maximus consequat, massa vel sagittis blandit,
              elit elit porta est, nec laoreet nisi lectus ac nibh. Suspendisse
              potenti. Proin in ligula iaculis, viverra nulla a, vehicula
              risus."
            </li>
          </ul>
          <img
            src="/assets/MediaNewsImages/blogs-and-updates/single-blog-right-image.png"
            alt=""
            className="w-1/2"
          />
        </div>
      </div>
    </div>
  );
}
