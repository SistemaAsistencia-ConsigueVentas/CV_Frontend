import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const labelMap = {
  department_attendance_count: "Asistencia",
  department_absence_count: "Falta",
  department_delay_count: "Tardanza",
  department_justification_count: "Justificación",
  core_attendance_count: "Asistencia",
  core_absence_count: "Falta",
  core_delay_count: "Tardanza",
  core_justification_count: "Justificación",
  profile_attendance_count: "Asistencia",
  profile_absence_count: "Falta",
  profile_delay_count: "Tardanza",
  profile_justification_count: "Justificación",
};

const BarrasAsistencia = ({ barras, isCore, isDepart }) => {
  let xAxisDataKey = "department_name";
  let barDataKey1 = "department_attendance_count";
  let barDataKey2 = "department_absence_count";
  let barDataKey3 = "department_delay_count";
  let barDataKey4 = "department_justification_count";

  if (isDepart && !isCore) {
    xAxisDataKey = "core_name";
    barDataKey1 = "core_attendance_count";
    barDataKey2 = "core_absence_count";
    barDataKey3 = "core_delay_count";
    barDataKey4 = "core_justification_count";
    const uniqueData = [];
    const existingValues = new Set();

    for (const entry of barras) {
      const value = entry[xAxisDataKey];
      if (!existingValues.has(value)) {
        existingValues.add(value);
        uniqueData.push(entry);
      }
    }

    barras = uniqueData;
  } else if (isDepart && isCore) {
    xAxisDataKey = "profile_name";
    barDataKey1 = "profile_attendance_count";
    barDataKey2 = "profile_absence_count";
    barDataKey3 = "profile_delay_count";
    barDataKey4 = "profile_justification_count";
  }

  return (
    <ResponsiveContainer width="100%">
      <BarChart data={barras} barSize={30}>
        <XAxis
          dataKey={xAxisDataKey}
          tickFormatter={(value) => {
            const words = value.split(" ");
            if (words.length > 1) {
              return `${words[0].slice(0, 3)}. ${words.slice(1).join(" ")}`;
            }
            return value;
          }}
        />
        <YAxis />
        <Tooltip
          formatter={(value, name) => [value, labelMap[name]]
        }
          labelStyle={{ color: "black", textTransform: "uppercase" }}
          contentStyle={{ fontWeight: "bold", fontSize: "16px" }}
          itemStyle={{ padding: 3, margin: 0 }}
        />
        <CartesianGrid
          strokeDasharray="1 0"
          horizontal={true}
          vertical={false}
        />
        <Bar dataKey={barDataKey1} fill="#24ff00" />
        <Bar dataKey={barDataKey2} fill="#ff0000" />
        <Bar dataKey={barDataKey3} fill="#c8cc0a" />
        <Bar dataKey={barDataKey4} fill="#22cad6" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarrasAsistencia;
