import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const Form = () => {
  const [cityData, setCityData] = useState({});
  const fetchData = async () => {
    try {
      let response = await fetch("./iranstates.json");

      const data = await response.json();
      setCityData({ ...data });
    } catch (errro) {
      console.log(errro);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  const schema = yup.object().shape({
    city: yup.string().required("شهر را انتخاب کنید"),
    county: yup.string().required("حتما شهرستان محل زندگی خود را وارد کنید"),
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [counties, setCounties] = useState([]);
  const selectedCity = watch("city");

  useEffect(() => {
    if (selectedCity) {
      setCounties(cityData[selectedCity]);
    } else {
      setCounties([]);
    }
  }, [selectedCity]);

  const onSubmit = (data) => {
    console.log("Form Data: ",data);
  };
  return (
    <div>
      <h2 className="text-3xl font-bold text-center">محل زندگی شما</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-8 flex flex-col gap-8 w-[400px]"
      >
        <div className="flex flex-col w-[400px]">
          <label htmlFor="city">شهر</label>
          <select
            id="city"
            {...register("city")}
            className="w-full bg-pink-300 p-2 rounded mt-2 p-2"
          >
            <option value="">انتخاب شهر</option>
            {Object.keys(cityData).map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
          {errors && (
            <p className="text-red-500 text-xs">{errors.city?.message}</p>
          )}
        </div>

        <div className="flex flex-col w-[400px]">
          <label htmlFor="county">شهرستان</label>
          <select
            id="county"
            {...register("county")}
            disabled={!selectedCity}
            className="w-full bg-pink-300 p-2 rounded mt-2 p-2"
          >
            <option value="">انتخاب شهرستان</option>
            {counties.map((county) => (
              <option key={county} value={county}>
                {county}
              </option>
            ))}
          </select>
          {errors && (
            <p className="text-red-500 text-xs">{errors.county?.message}</p>
          )}
        </div>
        <button className="bg-pink-500 p-2 rounded w-full" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
