import { MapPin, Users, Utensils } from "lucide-react";

export default function StudentLifeSection() {
  const galleryImages = [
    {
      url: "/attached_assets/Screenshot 2025-08-26 at 09.55.35_1756198553740.png",
      caption: "Workshop Sessions"
    },
    {
      url: "/attached_assets/Screenshot 2025-08-26 at 09.53.58_1756198553740.png",
      caption: "Historic Setting"
    },
    {
      url: "/attached_assets/Screenshot 2025-08-26 at 09.54.22_1756198553740.png",
      caption: "Oxford Streets"
    },
    {
      url: "/attached_assets/Screenshot 2025-08-26 at 09.52.55_1756198553740.png",
      caption: "Study Time"
    },
    {
      url: "/attached_assets/Screenshot 2025-08-26 at 09.54.38_1756198553740.png",
      caption: "Team Projects"
    },
    {
      url: "/attached_assets/Screenshot 2025-08-26 at 09.52.44_1756198553740.png",
      caption: "Collaboration"
    },
    {
      url: "/attached_assets/Screenshot 2025-08-26 at 09.53.51_1756198553740.png",
      caption: "College Life"
    },
    {
      url: "/attached_assets/Screenshot 2025-08-26 at 09.53.26_1756198553740.png",
      caption: "Campus Social"
    }
  ];

  const activities = [
    {
      icon: MapPin,
      title: "Cultural Excursions",
      description: "Visit museums, historic sites, and experience British culture",
      color: "from-blue-50 to-blue-100",
      iconColor: "text-blue-500"
    },
    {
      icon: Users,
      title: "Social Activities",
      description: "Evening entertainment, games, and friendship building",
      color: "from-green-50 to-green-100",
      iconColor: "text-academy-green"
    },
    {
      icon: Utensils,
      title: "Dining Experience",
      description: "Meals in historic dining halls with international cuisine",
      color: "from-orange-50 to-orange-100",
      iconColor: "text-academy-orange"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-academy-green mb-6" data-testid="student-life-title">
            Student Life at Oxford
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-testid="student-life-description">
            Experience the perfect balance of intensive learning, cultural exploration, and social activities in one of the world's most beautiful university cities.
          </p>
        </div>
        
        {/* Image Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12" data-testid="student-life-gallery">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="aspect-square bg-cover bg-center rounded-xl shadow-lg hover:shadow-xl transition-shadow cursor-pointer group"
              style={{ backgroundImage: `url('${image.url}')` }}
              data-testid={`gallery-image-${index}`}
            >
              <div className="w-full h-full bg-black/30 rounded-xl flex items-end p-4 group-hover:bg-black/50 transition-colors">
                <span className="text-white font-semibold text-sm" data-testid={`gallery-caption-${index}`}>
                  {image.caption}
                </span>
              </div>
            </div>
          ))}
        </div>
        
        {/* Activities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => {
            const Icon = activity.icon;
            return (
              <div 
                key={index}
                className={`text-center p-6 bg-gradient-to-br ${activity.color} rounded-2xl`}
                data-testid={`activity-card-${index}`}
              >
                <Icon className={`w-12 h-12 ${activity.iconColor} mb-4 mx-auto`} />
                <h3 className="font-semibold text-academy-green mb-2" data-testid={`activity-title-${index}`}>
                  {activity.title}
                </h3>
                <p className="text-sm text-gray-600" data-testid={`activity-description-${index}`}>
                  {activity.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
