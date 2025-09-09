"use client";
import React, { useState, useEffect, useRef } from "react";
import Script from "next/script";

function PublishAddonModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [token, setToken] = useState("");
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState({
    type: "",
    message: ""
  });
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    author: "",
    description: "",
    url: "",
  });
  const widgetRef = useRef(null);

  // Crear callback global para Turnstile
  useEffect(() => {
    window.turnstileCallback = (token) => {
      setToken(token);
    };
  }, []);

  // Reset Turnstile y token al cerrar
  useEffect(() => {
    if (!isOpen && window.turnstile && widgetRef.current) {
      window.turnstile.reset(widgetRef.current);
      setToken("");
    }
  }, [isOpen]);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!token) {
      setNotification({
        message: "You must complete the challenge!",
        type: "error"
      })
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/addons", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, token }),
      });

      const data = await res.json();

      if (res.ok) {
        setNotification({
          message: "Your addon has been published!",
          type: "success"
        })
        setIsOpen(false);
        setFormData({ name: "", price: "", author: "", description: "", url: "" });
        setToken("");
      } else {
        setNotification({
          message: "Something went wrong",
          type: "error"
        })
      }
    } catch (err) {
      console.error(err);
      setNotification({
        message: "Something went wrong",
        type: "error"
      })
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Botón para abrir modal */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="w-full rounded-lg border border-primary-950 bg-primary-950 px-5 py-2.5 text-sm font-medium text-primary-500 transition-all hover:border-primary-800 hover:bg-primary-800 focus:ring focus:ring-primary-700"
      >
        <i className="bi bi-plus"></i> Share your addon
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50">
          <div className="bg-black rounded-2xl p-6 w-[400px] shadow-lg relative border border-gray-700">
            {/* Botón cerrar */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-primary-500 hover:text-primary-700"
            >
              <i className="bi bi-x-lg"></i>
            </button>

            {notification.type === "success" && (
              <div className="my-3 rounded-lg px-4 py-2 font-medium bg-primary-950 text-primary-500">
                <i class="bi bi-check-circle"></i> {notification.message}
              </div>
            )}

            {notification.type === "error" && (
              <div className="my-3 rounded-lg px-4 py-2 font-medium bg-amber-950 text-amber-500">
                <i class="bi bi-exclamation-triangle"></i> {notification.message}
              </div>
            )}
            <h2 className="text-xl font-semibold text-white mb-4">Publish Addon</h2>

            <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                type="text"
                placeholder="Addon Name"
                className="rounded-lg border border-gray-700 bg-gray-950 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-primary-700"
              />
              <input
                name="price"
                value={formData.price}
                onChange={handleChange}
                type="text"
                placeholder="Price (0 = Free)"
                className="rounded-lg border border-gray-700 bg-gray-950 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-primary-700"
              />
              <input
                name="author"
                value={formData.author}
                onChange={handleChange}
                type="text"
                placeholder="Author"
                className="rounded-lg border border-gray-700 bg-gray-950 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-primary-700"
              />
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Description"
                rows="3"
                className="rounded-lg border border-gray-700 bg-gray-950 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-primary-700"
              ></textarea>
              <input
                name="url"
                value={formData.url}
                onChange={handleChange}
                type="url"
                placeholder="BuiltByBit.com URL"
                className="rounded-lg border border-gray-700 bg-gray-950 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-primary-700"
              />

              {/* Turnstile */}
              <Script
                src="https://challenges.cloudflare.com/turnstile/v0/api.js"
                strategy="lazyOnload"
              />
              <div
                ref={widgetRef}
                className="cf-turnstile mt-2"
                data-sitekey="0x4AAAAAAB0R8HK8uL1x0nf7"
                data-callback="turnstileCallback"
              ></div>

              {/* Botón Publish */}
              <button
                type="submit"
                disabled={loading}
                className={`mt-3 rounded-lg px-4 py-2 font-medium transition-all ${loading
                  ? "bg-gray-700 text-gray-400 cursor-not-allowed"
                  : "bg-primary-950 text-primary-500 hover:bg-primary-800"
                  }`}
              >
                {loading ? "Publishing..." : "Publish"}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default PublishAddonModal;
