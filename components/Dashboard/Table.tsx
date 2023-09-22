"use client";

import { NextPage } from "next";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";

export const Table: NextPage<{}> = ({}) => (
  <div className="overflow-x-auto">
    <table className="table table-md">
      <thead>
        <tr className="text-black">
          <th></th>
          {Object.keys(tableData[0]).map((item) => (
            <th key={item} className="capitalize">
              {item}
            </th>
          ))}
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map(({ name: name, job: job, company }, i) => (
          <tr key={i}>
            <th>{i + 1}</th>
            <td>{name}</td>
            <td>{job}</td>
            <td>{company}</td>
            <td>
              <button className="btn btn-xs btn-warning capitalize hover:text-black">
                <FiEdit /> Edit
              </button>
            </td>
            <td>
              <button className="btn btn-xs btn-error bg-red-600 hover:text-gray-700 transition-all delay-100 capitalize">
                <MdDelete /> Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <th></th>
          {Object.keys(tableData[0]).map((item) => (
            <th key={item} className="capitalize text-black">
              {item}
            </th>
          ))}
        </tr>
      </tfoot>
    </table>
  </div>
);

const tableData = [
  {
    name: "Cy Ganderton",
    job: "Quality Control Specialist",
    company: "Littel, Schaden and Vandervort",
  },
  {
    name: "Hart Hagerty",
    job: "Desktop Support Technician",
    company: "Zemlak, Daniel and Leannon",
  },
  {
    name: "Brice Swyre",
    job: "Tax Accountant",
    company: "Carroll Group",
  },
  {
    name: "Marjy Ferencz",
    job: "Office Assistant I",
    company: "Rowe-Schoen",
  },
  {
    name: "Yancy Tear",
    job: "Community Outreach Specialist",
    company: "Wyman-Ledner",
  },
  {
    name: "Irma Vasilik",
    job: "Editor",
    company: "Wiza, Bins and Emard",
  },
  {
    name: "Meghann Durtnal",
    job: "Staff Accountant IV",
    company: "Schuster-Schimmel",
  },
  {
    name: "Sammy Seston",
    job: "Accountant I",
    company: "O&rsquo;Hara, Welch and Keebler",
  },
  {
    name: "Lesya Tinham",
    job: "Safety Technician IV",
    company: "Turner-Kuhlman",
  },
  {
    name: "Zaneta Tewkesbury",
    job: "VP Marketing",
    company: "Sauer LLC",
  },
];
