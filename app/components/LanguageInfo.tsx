interface LanguageInfoProps {
  name: string;
  info: string;
}

export default function LanguageInfo({ name, info }: LanguageInfoProps) {
  return (
    <div className="mt-10 max-w-lg text-center">
      <h4 className="text-xl font-bold">{name}</h4>
      <p className="mt-2 text-gray-200">{info}</p>
    </div>
  );
}
