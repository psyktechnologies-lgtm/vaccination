export function MapWidget() {
  return (
    <section id="map" className="rounded-xl border overflow-hidden">
      <div className="p-3 text-sm font-medium">Nearby Centers</div>
      <iframe
        title="Nearby Vaccination Centers"
        className="w-full h-[300px]"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps?q=vaccination%20clinic&output=embed"
      />
    </section>
  )
}
