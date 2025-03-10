import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold">Mi Portafolio</h1>
        <p className="text-gray-600">Desarrollo Web | IA | Bases de Datos</p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <motion.div whileHover={{ scale: 1.05 }}>
          <Card className="shadow-lg">
            <CardContent>
              <h2 className="text-xl font-semibold">Proyecto Web</h2>
              <p className="text-gray-600">Desarrollo con Laravel y React.</p>
              <Button className="mt-3">Ver más</Button>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div whileHover={{ scale: 1.05 }}>
          <Card className="shadow-lg">
            <CardContent>
              <h2 className="text-xl font-semibold">Proyecto de IA</h2>
              <p className="text-gray-600">Modelo predictivo con TensorFlow.</p>
              <Button className="mt-3">Ver más</Button>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div whileHover={{ scale: 1.05 }}>
          <Card className="shadow-lg">
            <CardContent>
              <h2 className="text-xl font-semibold">Gestión de Bases de Datos</h2>
              <p className="text-gray-600">Optimización en SQL Server y MySQL.</p>
              <Button className="mt-3">Ver más</Button>
            </CardContent>
          </Card>
        </motion.div>
      </section>
    </div>
  );
}