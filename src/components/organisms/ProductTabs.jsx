import { useState } from "react";

export default function ProductTabs({ description, reviewsCount = 0 }) {
  const [activeTab, setActiveTab] = useState("Product Information");
  const tabs = [
    { name: "Product Information", id: "info" },
    { name: `Reviews ${reviewsCount}`, id: "reviews" },
    { name: "Another tab", id: "other" },
  ];

  return (
    <div className="mt-16 bg-[#FAFAFA] p-6 sm:p-10 rounded-lg">
      {/* 1. Заголовки табов (Molecule: TabBar) */}
      <div className="flex gap-8 border-b-2 border-gray-200 mb-6 relative">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.name;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.name)}
              className={`pb-4 text-lg font-medium transition-colors duration-300 relative -mb-[2px] outline-none
                    ${
                      isActive
                        ? "text-blue-500 border-b-2 border-blue-500"
                        : "text-gray-400 hover:text-gray-600 border-b-2 border-transparent"
                    }`}
            >
              {tab.name}
            </button>
          );
        })}
      </div>

      {/* 2. Контент табов (Organism Body) */}
      <div className="text-gray-500 text-sm leading-relaxed space-y-4 min-h-[100px]">
        {activeTab === "Product Information" && (
          <div className="animate-fade-in">
            {description || "No description provided for this product."}
          </div>
        )}

        {activeTab.includes("Reviews") && (
          <div className="animate-fade-in">
            {reviewsCount > 0
              ? "List of reviews will be here..."
              : "No reviews yet. Be the first to write one!"}
          </div>
        )}

        {activeTab === "Another tab" && <div>Additional content...</div>}
      </div>
    </div>
  );
}
