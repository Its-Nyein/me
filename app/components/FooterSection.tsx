import React from "react";

function FooterSection() {
  return (
    <footer className="w-full mt-30 px-4 md:px-8 py-4 border-t border-t-zinc-700">
      <div className="max-w-7xl mx-auto flex justify-between">
        <p className="text-zinc-500 text-sm">
          {" "}
          &copy; copyright {new Date().getFullYear()}
        </p>
        <p className="text-zinc-500 text-sm">
          Design and Developed by{" "}
          <span className="font-bold">Nyein Phyo Aung</span>
        </p>
      </div>
    </footer>
  );
}

export default FooterSection;
