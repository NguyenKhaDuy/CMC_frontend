export default function TrailerSection() {
  return (
    <section className="mt-24">
      <h2 className="text-3xl font-bold mb-8">Trailer</h2>

      <div className="aspect-video rounded-2xl overflow-hidden">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/TcMBFSGVi1c"
          title="Trailer"
          allowFullScreen
        />
      </div>
    </section>
  );
}
