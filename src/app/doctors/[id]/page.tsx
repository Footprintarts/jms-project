import DoctorClient from "@/src/components/DoctorClient";
import { doctors } from "../../../assets/data/doctors";
import DocNotFound from "../../../components/DocNotFound";

interface PageProps {
  params: Promise<{ id: string }>;
}

// Server-side data fetching
export async function generateStaticParams() {
  const params = await doctors.map((doctor) => ({
    id: doctor.id,
  }));
  return params;
}

export default function Page({ params }: { params: any }) {
  const doctor = doctors.find((doc) => doc.id === params.id);

  if (!doctor) {
    return <DocNotFound />;
  }

  return <DoctorClient doctor={doctor} />;
}
