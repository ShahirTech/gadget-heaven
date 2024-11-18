import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import {
  ComposedChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Area,
  Bar,
  Scatter,
  ResponsiveContainer,
} from "recharts";

const Statistics = () => {
  useEffect(() => {
    document.title = "Statistics - Gadget Heaven";
  }, []);
  const [chartData, setChartData] = useState([]);
  const products = useLoaderData();

  useEffect(() => {
    const data = products.map((product) => ({
      productName: product.product_title,
      price: product.price,
      rating: product.rating,
    }));
    setChartData(data);
  }, [products]);

  return (
    <>
      <section className="w-full bg-[#9538E2] flex items-center justify-center text-center flex-col gap-6 py-10">
        <h1 className="text-2xl md:text-4xl font-bold text-white">
          Statistics
        </h1>
        <p className="text-white text-sm md:text-base w-[80%] mx-auto">
          Dive into our detailed product statistics to better understand the
          relationship between price, rating, and customer satisfaction. Whether
          you&apos;re comparing your favorite gadgets or exploring new trends, our
          charts give you the insights you need to make informed decisions.
        </p>
      </section>

      <div className="bg-purple-50 p-6 rounded-xl shadow-lg my-10 mx-auto w-[90%] md:w-3/4"> 
        <h2 className="text-xl md:text-3xl font-bold text-purple-500 text-center mb-6">
          Product Price vs Rating Statistics
        </h2>
        <div className="border-2 border-purple-500 rounded-lg p-4 bg-white">
          <ResponsiveContainer width="100%" height={400}>
            <ComposedChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
              <XAxis
                dataKey="productName"
                className="text-sm"
                tick={{ fill: "#6B21A8" }}
                tickLine={false}
                axisLine={{ stroke: "#6B21A8" }}
              />
              <YAxis
                tick={{ fill: "#6B21A8" }}
                tickLine={false}
                axisLine={{ stroke: "#6B21A8" }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#FAF5FF",
                  borderColor: "#6B21A8",
                }}
                labelStyle={{ color: "#6B21A8" }}
              />
              <Legend verticalAlign="top" align="center" />
              <Area
                type="monotone"
                dataKey="price"
                fill="#D8B4FE"
                stroke="#9333EA"
                isAnimationActive={false}
              />
              <Bar dataKey="price" barSize={20} fill="#6B21A8" />
              <Scatter dataKey="rating" fill="#EDE9FE" />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
};

export default Statistics;