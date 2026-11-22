using System;
using System.Collections.Generic;
using System.IO;
using System.Text;
using System.Globalization;

public sealed class DishMeshGroup
{
    public string Name;
    public List<float> Positions = new List<float>();
    public List<float> Normals = new List<float>();
    public List<uint> Indices = new List<uint>();

    public DishMeshGroup(string name) { Name = name; }
}

public static class DishModelGenerator
{
    static readonly Dictionary<string, float[]> Colors = new Dictionary<string, float[]>
    {
        { "porcelain", new float[] { 0.84f, 0.81f, 0.75f, 1f } },
        { "gold", new float[] { 0.72f, 0.49f, 0.20f, 1f } },
        { "wood", new float[] { 0.34f, 0.18f, 0.08f, 1f } },
        { "darkPlate", new float[] { 0.055f, 0.055f, 0.05f, 1f } },
        { "steel", new float[] { 0.48f, 0.49f, 0.46f, 1f } },
        { "cream", new float[] { 0.94f, 0.88f, 0.73f, 1f } },
        { "white", new float[] { 0.96f, 0.93f, 0.85f, 1f } },
        { "peach", new float[] { 0.94f, 0.38f, 0.16f, 1f } },
        { "yolk", new float[] { 0.95f, 0.48f, 0.08f, 1f } },
        { "honey", new float[] { 0.72f, 0.39f, 0.08f, 1f } },
        { "bread", new float[] { 0.68f, 0.39f, 0.18f, 1f } },
        { "leaf", new float[] { 0.13f, 0.34f, 0.16f, 1f } },
        { "leafLight", new float[] { 0.34f, 0.49f, 0.19f, 1f } },
        { "mushroomStem", new float[] { 0.82f, 0.72f, 0.56f, 1f } },
        { "hazelnut", new float[] { 0.46f, 0.27f, 0.12f, 1f } },
        { "fish", new float[] { 0.91f, 0.34f, 0.20f, 1f } },
        { "sear", new float[] { 0.21f, 0.10f, 0.06f, 1f } },
        { "beef", new float[] { 0.38f, 0.10f, 0.07f, 1f } },
        { "butter", new float[] { 0.98f, 0.76f, 0.29f, 1f } },
        { "potato", new float[] { 0.83f, 0.56f, 0.24f, 1f } },
        { "rice", new float[] { 0.94f, 0.88f, 0.72f, 1f } },
        { "parmesan", new float[] { 0.96f, 0.85f, 0.58f, 1f } },
        { "pumpkin", new float[] { 0.93f, 0.35f, 0.08f, 1f } },
        { "curry", new float[] { 0.69f, 0.32f, 0.08f, 1f } },
        { "berry", new float[] { 0.55f, 0.08f, 0.16f, 1f } },
        { "cake", new float[] { 0.78f, 0.54f, 0.29f, 1f } },
        { "asparagus", new float[] { 0.27f, 0.43f, 0.16f, 1f } },
        { "lemon", new float[] { 0.93f, 0.76f, 0.24f, 1f } },
        { "mushroom", new float[] { 0.39f, 0.22f, 0.13f, 1f } },
        { "crust", new float[] { 0.53f, 0.27f, 0.11f, 1f } },
        { "pear", new float[] { 0.77f, 0.62f, 0.31f, 1f } },
        { "icecream", new float[] { 0.97f, 0.91f, 0.74f, 1f } },
        { "almond", new float[] { 0.79f, 0.62f, 0.37f, 1f } },
        { "glass", new float[] { 0.78f, 0.88f, 0.91f, 0.24f } },
        { "coffee", new float[] { 0.10f, 0.045f, 0.018f, 1f } },
        { "campesino", new float[] { 0.25f, 0.12f, 0.045f, 1f } },
        { "latte", new float[] { 0.48f, 0.27f, 0.12f, 1f } },
        { "chocolateDrink", new float[] { 0.29f, 0.12f, 0.055f, 1f } },
        { "lemonade", new float[] { 0.92f, 0.76f, 0.30f, 1f } },
        { "coconutDrink", new float[] { 0.91f, 0.85f, 0.68f, 1f } },
        { "beer", new float[] { 0.76f, 0.31f, 0.045f, 1f } },
        { "cola", new float[] { 0.15f, 0.055f, 0.025f, 1f } },
        { "water", new float[] { 0.52f, 0.77f, 0.85f, 1f } },
        { "foam", new float[] { 0.98f, 0.91f, 0.74f, 1f } },
        { "ice", new float[] { 0.68f, 0.85f, 0.91f, 0.72f } },
        { "straw", new float[] { 0.72f, 0.12f, 0.09f, 1f } },
        { "panela", new float[] { 0.50f, 0.27f, 0.10f, 1f } },
        { "bubble", new float[] { 0.88f, 0.95f, 0.96f, 0.72f } },
        { "aguapanela", new float[] { 0.55f, 0.29f, 0.08f, 1f } },
        { "hotChocolate", new float[] { 0.27f, 0.12f, 0.055f, 1f } },
        { "lulo", new float[] { 0.64f, 0.76f, 0.24f, 1f } },
        { "avena", new float[] { 0.76f, 0.63f, 0.42f, 1f } },
        { "chicha", new float[] { 0.71f, 0.55f, 0.30f, 1f } },
        { "masato", new float[] { 0.64f, 0.43f, 0.22f, 1f } },
        { "terracotta", new float[] { 0.49f, 0.22f, 0.14f, 1f } },
        { "cinnamon", new float[] { 0.34f, 0.15f, 0.07f, 1f } },
        { "maize", new float[] { 0.92f, 0.69f, 0.24f, 1f } },
        { "luloPulp", new float[] { 0.83f, 0.83f, 0.39f, 1f } },
        { "plantain", new float[] { 0.88f, 0.53f, 0.16f, 1f } },
        { "hogao", new float[] { 0.63f, 0.16f, 0.07f, 1f } },
        { "cheeseCoast", new float[] { 0.92f, 0.78f, 0.49f, 1f } },
        { "mozzarella", new float[] { 0.97f, 0.93f, 0.81f, 1f } },
        { "guavaBbq", new float[] { 0.55f, 0.16f, 0.07f, 1f } },
        { "suero", new float[] { 0.91f, 0.86f, 0.72f, 1f } },
        { "cassava", new float[] { 0.91f, 0.79f, 0.56f, 1f } },
        { "avocado", new float[] { 0.27f, 0.43f, 0.17f, 1f } },
        { "toast", new float[] { 0.34f, 0.16f, 0.07f, 1f } },
        { "friedCrust", new float[] { 0.72f, 0.36f, 0.12f, 1f } }
    };

    static List<DishMeshGroup> groups;
    static Dictionary<string, DishMeshGroup> byName;
    static DishMeshGroup Group(string name)
    {
        DishMeshGroup result;
        if (!byName.TryGetValue(name, out result))
        {
            result = new DishMeshGroup(name);
            byName.Add(name, result);
            groups.Add(result);
        }
        return result;
    }

    static void Vertex(DishMeshGroup group, float x, float y, float z, float nx, float ny, float nz)
    {
        group.Positions.Add(x); group.Positions.Add(y); group.Positions.Add(z);
        group.Normals.Add(nx); group.Normals.Add(ny); group.Normals.Add(nz);
    }

    static void Triangle(DishMeshGroup group, int a, int b, int c)
    {
        group.Indices.Add((uint)a); group.Indices.Add((uint)b); group.Indices.Add((uint)c);
    }

    static void Face(DishMeshGroup group, float ax, float ay, float az, float bx, float by, float bz, float cx, float cy, float cz)
    {
        float abx = bx - ax, aby = by - ay, abz = bz - az;
        float acx = cx - ax, acy = cy - ay, acz = cz - az;
        float nx = aby * acz - abz * acy;
        float ny = abz * acx - abx * acz;
        float nz = abx * acy - aby * acx;
        float length = (float)Math.Sqrt(nx * nx + ny * ny + nz * nz);
        if (length == 0) return;
        int start = group.Positions.Count / 3;
        Vertex(group, ax, ay, az, nx / length, ny / length, nz / length);
        Vertex(group, bx, by, bz, nx / length, ny / length, nz / length);
        Vertex(group, cx, cy, cz, nx / length, ny / length, nz / length);
        Triangle(group, start, start + 1, start + 2);
    }

    static void Rod(string material, float ax, float ay, float az, float bx, float by, float bz, float radius, int segments)
    {
        DishMeshGroup group = Group(material);
        float dx = bx - ax, dy = by - ay, dz = bz - az;
        float length = (float)Math.Sqrt(dx * dx + dy * dy + dz * dz);
        if (length == 0) return;
        dx /= length; dy /= length; dz /= length;
        float rx = Math.Abs(dy) < 0.9f ? 0 : 1;
        float ry = Math.Abs(dy) < 0.9f ? 1 : 0;
        float rz = 0;
        float ux = dy * rz - dz * ry, uy = dz * rx - dx * rz, uz = dx * ry - dy * rx;
        float uLength = (float)Math.Sqrt(ux * ux + uy * uy + uz * uz);
        ux /= uLength; uy /= uLength; uz /= uLength;
        float vx = dy * uz - dz * uy, vy = dz * ux - dx * uz, vz = dx * uy - dy * ux;
        int start = group.Positions.Count / 3;
        for (int i = 0; i <= segments; i++)
        {
            double angle = 2 * Math.PI * i / segments;
            float nx = ux * (float)Math.Cos(angle) + vx * (float)Math.Sin(angle);
            float ny = uy * (float)Math.Cos(angle) + vy * (float)Math.Sin(angle);
            float nz = uz * (float)Math.Cos(angle) + vz * (float)Math.Sin(angle);
            Vertex(group, ax + nx * radius, ay + ny * radius, az + nz * radius, nx, ny, nz);
            Vertex(group, bx + nx * radius, by + ny * radius, bz + nz * radius, nx, ny, nz);
        }
        for (int i = 0; i < segments; i++)
        {
            int a = start + i * 2;
            Triangle(group, a, a + 1, a + 2);
            Triangle(group, a + 2, a + 1, a + 3);
        }
    }

    static void Wedge(string material, float cx, float bottomY, float cz, float radius, float height, float startAngle, float sweepAngle, int segments)
    {
        DishMeshGroup group = Group(material);
        float topY = bottomY + height;
        for (int i = 0; i < segments; i++)
        {
            double a0 = startAngle + sweepAngle * i / segments;
            double a1 = startAngle + sweepAngle * (i + 1) / segments;
            float x0 = cx + radius * (float)Math.Cos(a0), z0 = cz + radius * (float)Math.Sin(a0);
            float x1 = cx + radius * (float)Math.Cos(a1), z1 = cz + radius * (float)Math.Sin(a1);
            Face(group, cx, topY, cz, x1, topY, z1, x0, topY, z0);
            Face(group, cx, bottomY, cz, x0, bottomY, z0, x1, bottomY, z1);
            Face(group, x0, bottomY, z0, x1, bottomY, z1, x1, topY, z1);
            Face(group, x0, bottomY, z0, x1, topY, z1, x0, topY, z0);
        }
        double[] angles = { startAngle, startAngle + sweepAngle };
        for (int i = 0; i < angles.Length; i++)
        {
            float x = cx + radius * (float)Math.Cos(angles[i]), z = cz + radius * (float)Math.Sin(angles[i]);
            Face(group, cx, bottomY, cz, x, bottomY, z, x, topY, z);
            Face(group, cx, bottomY, cz, x, topY, z, cx, topY, cz);
        }
    }

    static void Sphere(string material, float cx, float cy, float cz, float sx, float sy, float sz, int segments)
    {
        DishMeshGroup group = Group(material);
        int rings = Math.Max(8, segments / 2);
        int start = group.Positions.Count / 3;
        for (int ring = 0; ring <= rings; ring++)
        {
            double phi = Math.PI * ring / rings;
            double ny = Math.Cos(phi);
            double radial = Math.Sin(phi);
            for (int segment = 0; segment <= segments; segment++)
            {
                double theta = 2.0 * Math.PI * segment / segments;
                double ux = radial * Math.Cos(theta);
                double uz = radial * Math.Sin(theta);
                double nx = ux / sx, scaledY = ny / sy, nz = uz / sz;
                double length = Math.Sqrt(nx * nx + scaledY * scaledY + nz * nz);
                double variation = 1.0 +
                    0.012 * Math.Sin(theta * 7.0 + cx * 31.0) * Math.Sin(phi * 5.0 + cz * 23.0) +
                    0.006 * Math.Sin(theta * 13.0 - phi * 9.0 + cy * 37.0);
                Vertex(group, cx + (float)(ux * sx * variation), cy + (float)(ny * sy * variation), cz + (float)(uz * sz * variation),
                    (float)(nx / length), (float)(scaledY / length), (float)(nz / length));
            }
        }
        for (int ring = 0; ring < rings; ring++)
        {
            for (int segment = 0; segment < segments; segment++)
            {
                int a = start + ring * (segments + 1) + segment;
                int b = a + segments + 1;
                Triangle(group, a, b, a + 1);
                Triangle(group, a + 1, b, b + 1);
            }
        }
    }

    static void Cylinder(string material, float cx, float cy, float cz, float radius, float height, int segments)
    {
        DishMeshGroup group = Group(material);
        int start = group.Positions.Count / 3;
        for (int i = 0; i <= segments; i++)
        {
            double angle = 2.0 * Math.PI * i / segments;
            float x = (float)Math.Cos(angle), z = (float)Math.Sin(angle);
            Vertex(group, cx + x * radius, cy - height / 2f, cz + z * radius, x, 0, z);
            Vertex(group, cx + x * radius, cy + height / 2f, cz + z * radius, x, 0, z);
        }
        for (int i = 0; i < segments; i++)
        {
            int bottom = start + i * 2, top = bottom + 1;
            int nextBottom = bottom + 2, nextTop = bottom + 3;
            Triangle(group, bottom, top, nextBottom);
            Triangle(group, nextBottom, top, nextTop);
        }
        int bottomCenter = group.Positions.Count / 3;
        Vertex(group, cx, cy - height / 2f, cz, 0, -1, 0);
        int topCenter = group.Positions.Count / 3;
        Vertex(group, cx, cy + height / 2f, cz, 0, 1, 0);
        for (int i = 0; i < segments; i++)
        {
            int bottom = start + i * 2, nextBottom = bottom + 2;
            int top = bottom + 1, nextTop = top + 2;
            Triangle(group, bottomCenter, nextBottom, bottom);
            Triangle(group, topCenter, top, nextTop);
        }
    }

    static void Frustum(string material, float cx, float bottomY, float cz, float bottomRadius, float topRadius, float height, int segments, bool capBottom, bool capTop)
    {
        DishMeshGroup group = Group(material);
        float topY = bottomY + height;
        for (int i = 0; i < segments; i++)
        {
            double a0 = 2.0 * Math.PI * i / segments;
            double a1 = 2.0 * Math.PI * (i + 1) / segments;
            float bx0 = cx + bottomRadius * (float)Math.Cos(a0), bz0 = cz + bottomRadius * (float)Math.Sin(a0);
            float bx1 = cx + bottomRadius * (float)Math.Cos(a1), bz1 = cz + bottomRadius * (float)Math.Sin(a1);
            float tx0 = cx + topRadius * (float)Math.Cos(a0), tz0 = cz + topRadius * (float)Math.Sin(a0);
            float tx1 = cx + topRadius * (float)Math.Cos(a1), tz1 = cz + topRadius * (float)Math.Sin(a1);
            Face(group, bx0, bottomY, bz0, tx0, topY, tz0, tx1, topY, tz1);
            Face(group, bx0, bottomY, bz0, tx1, topY, tz1, bx1, bottomY, bz1);
            if (capBottom) Face(group, cx, bottomY, cz, bx0, bottomY, bz0, bx1, bottomY, bz1);
            if (capTop) Face(group, cx, topY, cz, tx1, topY, tz1, tx0, topY, tz0);
        }
    }

    static void Torus(string material, float cx, float cy, float cz, float radius, float tube, int segments)
    {
        DishMeshGroup group = Group(material);
        int start = group.Positions.Count / 3;
        int rings = Math.Max(8, segments / 2);
        for (int ring = 0; ring <= rings; ring++)
        {
            double phi = 2.0 * Math.PI * ring / rings;
            double cosPhi = Math.Cos(phi), sinPhi = Math.Sin(phi);
            for (int segment = 0; segment <= segments; segment++)
            {
                double theta = 2.0 * Math.PI * segment / segments;
                double cosTheta = Math.Cos(theta), sinTheta = Math.Sin(theta);
                float nx = (float)(cosPhi * cosTheta), ny = (float)sinPhi, nz = (float)(cosPhi * sinTheta);
                Vertex(group, cx + (float)((radius + tube * cosPhi) * cosTheta),
                    cy + (float)(tube * sinPhi), cz + (float)((radius + tube * cosPhi) * sinTheta), nx, ny, nz);
            }
        }
        for (int ring = 0; ring < rings; ring++)
        {
            for (int segment = 0; segment < segments; segment++)
            {
                int a = start + ring * (segments + 1) + segment;
                int b = a + segments + 1;
                Triangle(group, a, b, a + 1);
                Triangle(group, a + 1, b, b + 1);
            }
        }
    }

    static void TorusVertical(string material, float cx, float cy, float cz, float radius, float tube, int segments)
    {
        DishMeshGroup group = Group(material);
        int start = group.Positions.Count / 3;
        int rings = Math.Max(8, segments / 2);
        for (int ring = 0; ring <= rings; ring++)
        {
            double phi = 2.0 * Math.PI * ring / rings;
            double cosPhi = Math.Cos(phi), sinPhi = Math.Sin(phi);
            for (int segment = 0; segment <= segments; segment++)
            {
                double theta = 2.0 * Math.PI * segment / segments;
                double cosTheta = Math.Cos(theta), sinTheta = Math.Sin(theta);
                float nx = (float)(cosPhi * cosTheta), ny = (float)(cosPhi * sinTheta), nz = (float)sinPhi;
                Vertex(group, cx + (float)((radius + tube * cosPhi) * cosTheta),
                    cy + (float)((radius + tube * cosPhi) * sinTheta), cz + (float)(tube * sinPhi), nx, ny, nz);
            }
        }
        for (int ring = 0; ring < rings; ring++)
        {
            for (int segment = 0; segment < segments; segment++)
            {
                int a = start + ring * (segments + 1) + segment;
                int b = a + segments + 1;
                Triangle(group, a, b, a + 1);
                Triangle(group, a + 1, b, b + 1);
            }
        }
    }

    static void AddPlate(string type)
    {
        if (type == "mushrooms")
        {
            Cylinder("wood", 0, 0.026f, 0, 0.29f, 0.05f, 48);
            Torus("wood", 0, 0.05f, 0, 0.27f, 0.018f, 48);
            return;
        }
        if (type == "fish" || type == "tart")
        {
            Cylinder("darkPlate", 0, 0.018f, 0, 0.32f, 0.035f, 48);
            Torus("darkPlate", 0, 0.038f, 0, 0.27f, 0.012f, 48);
            return;
        }
        if (type == "thali")
        {
            Cylinder("steel", 0, 0.018f, 0, 0.32f, 0.035f, 48);
            Torus("steel", 0, 0.039f, 0, 0.285f, 0.012f, 48);
            return;
        }
        Cylinder("porcelain", 0, 0.018f, 0, 0.32f, 0.035f, 48);
        Torus("gold", 0, 0.038f, 0, 0.285f, 0.003f, 48);
        Torus("porcelain", 0, 0.039f, 0, type == "risotto" ? 0.22f : 0.255f, type == "risotto" ? 0.035f : 0.009f, 48);
    }

    static void AddBenedict()
    {
        Cylinder("bread", 0, 0.073f, 0, 0.12f, 0.025f, 36);
        Torus("crust", 0, 0.087f, 0, 0.095f, 0.009f, 32);
        Sphere("fish", -0.035f, 0.099f, 0, 0.075f, 0.012f, 0.063f, 24);
        Sphere("fish", 0.045f, 0.099f, 0, 0.075f, 0.012f, 0.063f, 24);
        Sphere("white", -0.045f, 0.13f, 0, 0.067f, 0.036f, 0.057f, 28);
        Sphere("white", 0.055f, 0.13f, 0, 0.067f, 0.036f, 0.057f, 28);
        Sphere("yolk", -0.045f, 0.16f, 0, 0.027f, 0.012f, 0.027f, 20);
        Sphere("yolk", 0.055f, 0.16f, 0, 0.027f, 0.012f, 0.027f, 20);
        Sphere("cream", 0, 0.166f, 0, 0.075f, 0.009f, 0.062f, 24);
        Rod("leafLight", -0.12f, 0.091f, 0.08f, -0.08f, 0.093f, 0.13f, 0.004f, 6);
        Rod("leafLight", 0.08f, 0.091f, -0.1f, 0.12f, 0.093f, -0.06f, 0.004f, 6);
    }

    static void AddMushrooms()
    {
        float[,] locations = new float[,] { { -0.17f, 0.02f }, { -0.105f, 0.12f }, { 0.005f, 0.15f }, { 0.13f, 0.085f }, { -0.02f, 0.015f }, { 0.12f, -0.09f }, { -0.14f, -0.13f }, { 0.035f, -0.12f }, { 0.2f, -0.005f } };
        float[] sizes = new float[] { 0.035f, 0.043f, 0.032f, 0.048f, 0.039f, 0.034f, 0.044f, 0.031f, 0.037f };
        for (int i = 0; i < locations.GetLength(0); i++)
        {
            float x = locations[i, 0], z = locations[i, 1];
            float size = sizes[i];
            Sphere("mushroomStem", x, 0.086f, z, size * 0.38f, 0.026f, size * 0.38f, 16);
            Sphere("mushroom", x, 0.112f + (i % 3) * 0.003f, z, size, size * 0.58f, size * 0.91f, 24);
        }
    }

    static void AddFish()
    {
        Sphere("fish", 0, 0.098f, 0, 0.185f, 0.034f, 0.076f, 36);
        Sphere("fish", 0.16f, 0.095f, 0.005f, 0.055f, 0.027f, 0.048f, 24);
        Sphere("sear", -0.16f, 0.119f, -0.012f, 0.035f, 0.006f, 0.059f, 18);
        for (int i = 0; i < 4; i++)
            Rod("sear", -0.11f + i * 0.065f, 0.136f, -0.033f, -0.08f + i * 0.065f, 0.136f, 0.035f, 0.004f, 6);
        Rod("asparagus", -0.09f, 0.074f, 0.14f, -0.015f, 0.077f, 0.23f, 0.009f, 8);
        Rod("asparagus", -0.015f, 0.074f, 0.14f, 0.055f, 0.078f, 0.23f, 0.009f, 8);
        Rod("asparagus", 0.06f, 0.074f, 0.13f, 0.12f, 0.077f, 0.22f, 0.008f, 8);
        Sphere("asparagus", -0.015f, 0.08f, 0.23f, 0.009f, 0.008f, 0.009f, 10);
        Sphere("asparagus", 0.055f, 0.081f, 0.23f, 0.009f, 0.008f, 0.009f, 10);
        Sphere("asparagus", 0.12f, 0.08f, 0.22f, 0.008f, 0.007f, 0.008f, 10);
        Sphere("leaf", -0.14f, 0.079f, 0.15f, 0.055f, 0.012f, 0.022f, 14);
        Sphere("leafLight", -0.045f, 0.08f, 0.17f, 0.052f, 0.011f, 0.022f, 14);
        Sphere("leaf", 0.045f, 0.079f, 0.16f, 0.05f, 0.01f, 0.02f, 14);
        for (int i = 0; i < 4; i++)
            Rod("pumpkin", -0.09f + i * 0.018f, 0.086f, 0.15f, -0.02f + i * 0.018f, 0.086f, 0.205f, 0.0035f, 6);
        Sphere("lemon", 0.13f, 0.078f, -0.14f, 0.035f, 0.014f, 0.032f, 18);
        Sphere("cream", -0.13f, 0.077f, -0.14f, 0.038f, 0.008f, 0.025f, 16);
        Sphere("sear", 0.13f, 0.087f, -0.14f, 0.007f, 0.003f, 0.007f, 10);
        Rod("leaf", -0.04f, 0.093f, 0.08f, 0.01f, 0.103f, 0.11f, 0.004f, 6);
    }

    static void AddThali()
    {
        Sphere("rice", -0.105f, 0.09f, -0.015f, 0.085f, 0.035f, 0.085f, 28);
        for (int i = 0; i < 14; i++)
        {
            double angle = i * 2.0 * Math.PI / 14.0;
            Sphere("rice", -0.105f + (float)(Math.Cos(angle) * 0.05), 0.119f, -0.015f + (float)(Math.Sin(angle) * 0.05), 0.009f, 0.004f, 0.006f, 8);
        }
        Cylinder("steel", 0.13f, 0.047f, -0.105f, 0.075f, 0.025f, 24);
        Torus("steel", 0.13f, 0.061f, -0.105f, 0.064f, 0.007f, 24);
        Cylinder("steel", 0.13f, 0.047f, 0.105f, 0.075f, 0.025f, 24);
        Torus("steel", 0.13f, 0.061f, 0.105f, 0.064f, 0.007f, 24);
        Cylinder("steel", -0.13f, 0.047f, 0.13f, 0.07f, 0.025f, 24);
        Torus("steel", -0.13f, 0.061f, 0.13f, 0.06f, 0.007f, 24);
        Sphere("curry", 0.13f, 0.074f, -0.105f, 0.061f, 0.023f, 0.055f, 20);
        Sphere("pumpkin", 0.13f, 0.074f, 0.105f, 0.061f, 0.022f, 0.055f, 20);
        Sphere("cream", -0.13f, 0.074f, 0.13f, 0.057f, 0.02f, 0.05f, 18);
        Cylinder("bread", 0.025f, 0.066f, -0.205f, 0.094f, 0.018f, 28);
        Sphere("bread", 0.025f, 0.078f, -0.205f, 0.094f, 0.008f, 0.078f, 20);
        Sphere("sear", -0.015f, 0.085f, -0.22f, 0.012f, 0.002f, 0.008f, 10);
        Sphere("sear", 0.045f, 0.085f, -0.19f, 0.01f, 0.002f, 0.007f, 10);
        Sphere("sear", 0.075f, 0.085f, -0.23f, 0.009f, 0.002f, 0.006f, 10);
        Sphere("leaf", 0.13f, 0.097f, -0.105f, 0.008f, 0.003f, 0.008f, 10);
        Sphere("leaf", 0.13f, 0.096f, 0.105f, 0.008f, 0.003f, 0.008f, 10);
        Sphere("white", -0.13f, 0.094f, 0.13f, 0.008f, 0.003f, 0.008f, 10);
    }

    static void AddRisotto()
    {
        Sphere("rice", 0, 0.097f, 0, 0.17f, 0.052f, 0.135f, 36);
        for (int i = 0; i < 24; i++)
        {
            double angle = i * 2.0 * Math.PI / 24.0;
            float radius = i % 2 == 0 ? 0.11f : 0.065f;
            Sphere("parmesan", (float)(Math.Cos(angle) * radius), 0.123f, (float)(Math.Sin(angle) * radius * 0.78f), 0.013f, 0.006f, 0.01f, 10);
        }
        Rod("leaf", 0.02f, 0.151f, -0.02f, 0.06f, 0.156f, 0.02f, 0.004f, 6);
        Rod("leafLight", -0.07f, 0.149f, 0.04f, -0.035f, 0.155f, 0.075f, 0.004f, 6);
    }

    static void AddTart()
    {
        Wedge("cake", 0, 0.057f, 0, 0.15f, 0.045f, -0.55f, 1.1f, 18);
        Wedge("berry", 0, 0.102f, 0, 0.15f, 0.015f, -0.55f, 1.1f, 18);
        Wedge("cream", 0, 0.117f, 0, 0.15f, 0.035f, -0.55f, 1.1f, 18);
        for (int i = 0; i < 5; i++)
        {
            double angle = -0.38 + i * 0.19;
            float x = (float)(Math.Cos(angle) * 0.09);
            float z = (float)(Math.Sin(angle) * 0.09);
            Sphere("berry", x, 0.158f, z, 0.018f, 0.017f, 0.018f, 16);
        }
        Sphere("berry", 0.115f, 0.165f, 0.025f, 0.022f, 0.02f, 0.022f, 16);
        Sphere("leaf", 0.08f, 0.16f, 0.005f, 0.009f, 0.004f, 0.018f, 10);
    }

    static void AddArepaPlatano()
    {
        Sphere("plantain", -0.055f, 0.09f, 0, 0.15f, 0.035f, 0.115f, 32);
        ToastMark(-0.055f, 0.09f, 0, 0.15f, 0.035f, 0.115f, -0.17f, -0.045f, 0.009f);
        ToastMark(-0.055f, 0.09f, 0, 0.15f, 0.035f, 0.115f, -0.12f, 0.075f, 0.007f);
        ToastMark(-0.055f, 0.09f, 0, 0.15f, 0.035f, 0.115f, 0.055f, 0.08f, 0.008f);
        ToastMark(-0.055f, 0.09f, 0, 0.15f, 0.035f, 0.115f, 0.085f, -0.055f, 0.007f);
        Sphere("beef", -0.05f, 0.125f, -0.005f, 0.09f, 0.018f, 0.075f, 26);
        Rod("beef", -0.12f, 0.139f, -0.04f, -0.025f, 0.142f, 0.01f, 0.006f, 8);
        Rod("beef", -0.08f, 0.145f, 0.045f, 0.005f, 0.143f, 0.03f, 0.005f, 8);
        Sphere("hogao", -0.02f, 0.148f, -0.005f, 0.055f, 0.012f, 0.043f, 18);
        Sphere("cheeseCoast", 0.035f, 0.145f, 0.025f, 0.045f, 0.01f, 0.035f, 18);
        Rod("mozzarella", -0.11f, 0.16f, 0.01f, -0.045f, 0.165f, 0.035f, 0.006f, 8);
        Rod("mozzarella", -0.015f, 0.16f, -0.045f, 0.055f, 0.163f, -0.02f, 0.006f, 8);
        Sphere("leafLight", 0.13f, 0.085f, -0.11f, 0.027f, 0.008f, 0.016f, 14);
        Sphere("leaf", 0.15f, 0.084f, -0.075f, 0.018f, 0.006f, 0.012f, 12);
    }

    static void AddAborrajadosBbq()
    {
        Sphere("friedCrust", -0.12f, 0.095f, -0.035f, 0.092f, 0.046f, 0.058f, 28);
        AddCrumbs(-0.12f, 0.095f, -0.035f, 0.092f, 0.046f, 0.058f, 10);
        ToastMark(-0.12f, 0.095f, -0.035f, 0.092f, 0.046f, 0.058f, -0.19f, -0.04f, 0.008f);
        ToastMark(-0.12f, 0.095f, -0.035f, 0.092f, 0.046f, 0.058f, -0.14f, 0.01f, 0.006f);
        Sphere("friedCrust", 0.02f, 0.099f, 0.02f, 0.09f, 0.045f, 0.058f, 28);
        AddCrumbs(0.02f, 0.099f, 0.02f, 0.09f, 0.045f, 0.058f, 10);
        ToastMark(0.02f, 0.099f, 0.02f, 0.09f, 0.045f, 0.058f, -0.045f, 0.025f, 0.007f);
        ToastMark(0.02f, 0.099f, 0.02f, 0.09f, 0.045f, 0.058f, 0.035f, -0.005f, 0.008f);
        Sphere("friedCrust", 0.14f, 0.091f, -0.04f, 0.078f, 0.041f, 0.054f, 28);
        AddCrumbs(0.14f, 0.091f, -0.04f, 0.078f, 0.041f, 0.054f, 8);
        Sphere("cheeseCoast", -0.12f, 0.132f, -0.035f, 0.05f, 0.012f, 0.036f, 18);
        Sphere("beef", 0.02f, 0.14f, 0.02f, 0.055f, 0.017f, 0.04f, 20);
        Rod("beef", -0.025f, 0.15f, 0.01f, 0.07f, 0.153f, 0.045f, 0.005f, 8);
        Sphere("guavaBbq", 0.14f, 0.128f, -0.04f, 0.045f, 0.012f, 0.032f, 18);
        Sphere("leafLight", -0.18f, 0.075f, 0.13f, 0.024f, 0.008f, 0.014f, 14);
        Sphere("leaf", 0.18f, 0.075f, 0.13f, 0.022f, 0.007f, 0.013f, 14);
    }

    static void AddAborrajadosSinFreir()
    {
        Sphere("plantain", -0.075f, 0.089f, 0, 0.125f, 0.029f, 0.086f, 28);
        Sphere("plantain", 0.075f, 0.089f, 0, 0.125f, 0.029f, 0.086f, 28);
        Sphere("mozzarella", -0.075f, 0.12f, 0, 0.075f, 0.01f, 0.054f, 22);
        Sphere("mozzarella", 0.075f, 0.12f, 0, 0.075f, 0.01f, 0.054f, 22);
        Cylinder("porcelain", 0.2f, 0.065f, 0.13f, 0.064f, 0.035f, 32);
        Torus("gold", 0.2f, 0.085f, 0.13f, 0.054f, 0.003f, 32);
        Cylinder("suero", 0.2f, 0.087f, 0.13f, 0.05f, 0.005f, 28);
        Sphere("leafLight", -0.18f, 0.075f, 0.13f, 0.024f, 0.008f, 0.014f, 14);
    }

    static void AddPapasChorreadas()
    {
        float[,] locations = new float[,] { { -0.16f, -0.07f }, { -0.07f, 0.06f }, { 0.055f, -0.085f }, { 0.17f, 0.015f }, { -0.02f, 0.16f }, { 0.105f, 0.14f } };
        for (int i = 0; i < locations.GetLength(0); i++)
        {
            float x = locations[i, 0], z = locations[i, 1];
            float size = i % 2 == 0 ? 0.061f : 0.054f;
            Sphere("potato", x, 0.083f, z, size, size * 0.82f, size, 22);
            Sphere("hogao", x - 0.008f, 0.125f, z, size * 0.54f, 0.012f, size * 0.45f, 16);
            Sphere("cheeseCoast", x + 0.008f, 0.138f, z - 0.008f, size * 0.39f, 0.009f, size * 0.34f, 14);
        }
        Rod("mozzarella", -0.13f, 0.145f, -0.01f, -0.035f, 0.15f, 0.04f, 0.004f, 6);
        Rod("mozzarella", 0.035f, 0.148f, -0.12f, 0.125f, 0.147f, -0.04f, 0.004f, 6);
        Sphere("leafLight", -0.12f, 0.155f, 0.08f, 0.018f, 0.006f, 0.012f, 12);
        Sphere("leaf", -0.09f, 0.154f, 0.105f, 0.014f, 0.005f, 0.01f, 12);
    }

    static void AddCarimanolas()
    {
        Sphere("friedCrust", -0.13f, 0.091f, -0.03f, 0.105f, 0.04f, 0.052f, 28);
        AddCrumbs(-0.13f, 0.091f, -0.03f, 0.105f, 0.04f, 0.052f, 12);
        Sphere("friedCrust", 0.005f, 0.094f, 0.025f, 0.105f, 0.04f, 0.052f, 28);
        AddCrumbs(0.005f, 0.094f, 0.025f, 0.105f, 0.04f, 0.052f, 12);
        Sphere("friedCrust", 0.14f, 0.09f, -0.025f, 0.095f, 0.038f, 0.05f, 28);
        AddCrumbs(0.14f, 0.09f, -0.025f, 0.095f, 0.038f, 0.05f, 10);
        Sphere("beef", -0.11f, 0.126f, -0.03f, 0.055f, 0.012f, 0.03f, 18);
        Sphere("beef", 0.022f, 0.132f, 0.025f, 0.054f, 0.012f, 0.031f, 18);
        Rod("beef", -0.16f, 0.135f, -0.045f, -0.07f, 0.135f, -0.02f, 0.004f, 6);
        Cylinder("porcelain", 0.21f, 0.063f, 0.135f, 0.062f, 0.032f, 32);
        Torus("gold", 0.21f, 0.08f, 0.135f, 0.052f, 0.003f, 32);
        Cylinder("suero", 0.21f, 0.082f, 0.135f, 0.049f, 0.005f, 28);
        Sphere("leafLight", -0.19f, 0.073f, 0.12f, 0.022f, 0.007f, 0.013f, 12);
    }

    static void AddPatacones()
    {
        Cylinder("plantain", -0.12f, 0.073f, -0.045f, 0.078f, 0.024f, 32);
        ToastMark(-0.12f, 0.073f, -0.045f, 0.078f, 0.012f, 0.078f, -0.15f, -0.055f, 0.007f);
        ToastMark(-0.12f, 0.073f, -0.045f, 0.078f, 0.012f, 0.078f, -0.095f, -0.02f, 0.006f);
        Cylinder("plantain", 0.02f, 0.073f, 0.035f, 0.082f, 0.024f, 32);
        ToastMark(0.02f, 0.073f, 0.035f, 0.082f, 0.012f, 0.082f, -0.005f, 0.01f, 0.007f);
        ToastMark(0.02f, 0.073f, 0.035f, 0.082f, 0.012f, 0.082f, 0.045f, 0.06f, 0.006f);
        Cylinder("plantain", 0.15f, 0.073f, -0.045f, 0.073f, 0.024f, 32);
        ToastMark(0.15f, 0.073f, -0.045f, 0.073f, 0.012f, 0.073f, 0.13f, -0.055f, 0.007f);
        Sphere("hogao", -0.12f, 0.093f, -0.045f, 0.05f, 0.01f, 0.04f, 18);
        Sphere("avocado", 0.02f, 0.094f, 0.035f, 0.051f, 0.011f, 0.041f, 18);
        Sphere("beef", 0.15f, 0.093f, -0.045f, 0.047f, 0.012f, 0.036f, 18);
        Sphere("cheeseCoast", -0.095f, 0.106f, -0.035f, 0.02f, 0.012f, 0.018f, 12);
        Rod("beef", 0.12f, 0.106f, -0.06f, 0.18f, 0.11f, -0.03f, 0.004f, 6);
        Sphere("leafLight", -0.22f, 0.075f, 0.14f, 0.022f, 0.007f, 0.014f, 12);
    }

    static void ToastMark(float cx, float baseY, float cz, float rx, float ry, float rz, float x, float z, float size)
    {
        float normalizedX = (x - cx) / rx;
        float normalizedZ = (z - cz) / rz;
        float surface = (float)Math.Sqrt(Math.Max(0, 1 - normalizedX * normalizedX - normalizedZ * normalizedZ));
        float y = baseY + ry * surface + 0.001f;
        Sphere("toast", x, y, z, size, 0.0018f, size * 0.72f, 10);
    }

    static void AddCrumbs(float cx, float cy, float cz, float rx, float ry, float rz, int count)
    {
        const double goldenAngle = 2.399963229728653;
        for (int i = 0; i < count; i++)
        {
            double yNorm = 0.2 + 0.72 * (i + 0.5) / count;
            double ring = Math.Sqrt(1 - yNorm * yNorm);
            double angle = i * goldenAngle;
            float x = cx + (float)(Math.Cos(angle) * ring * rx);
            float z = cz + (float)(Math.Sin(angle) * ring * rz);
            float y = cy + (float)(yNorm * ry) + 0.001f;
            float size = 0.0018f + (i % 3) * 0.0006f;
            Sphere("toast", x, y, z, size, 0.0012f, size, 8);
        }
    }

    static void AddCoffeeCup(string drinkMaterial, bool addPanela, bool addFoam)
    {
        Cylinder("porcelain", 0, 0.027f, 0, 0.145f, 0.025f, 40);
        Torus("gold", 0, 0.041f, 0, 0.132f, 0.0025f, 40);
        Frustum("porcelain", 0, 0.039f, 0, 0.068f, 0.092f, 0.14f, 40, true, false);
        Torus("porcelain", 0, 0.18f, 0, 0.092f, 0.004f, 40);
        TorusVertical("porcelain", 0.105f, 0.112f, 0, 0.039f, 0.007f, 32);
        Cylinder(drinkMaterial, 0, 0.165f, 0, 0.077f, 0.006f, 36);
        if (addFoam)
        {
            Sphere("foam", 0, 0.17f, 0, 0.046f, 0.004f, 0.035f, 20);
            Sphere("coffee", -0.012f, 0.174f, 0.002f, 0.008f, 0.002f, 0.006f, 10);
            Sphere("coffee", 0.014f, 0.174f, -0.005f, 0.006f, 0.002f, 0.005f, 10);
        }
        if (addPanela)
        {
            Sphere("panela", -0.105f, 0.047f, 0.085f, 0.025f, 0.012f, 0.022f, 14);
            Sphere("panela", -0.14f, 0.046f, 0.055f, 0.016f, 0.01f, 0.017f, 12);
        }
    }

    static void AddColdGlass(string drinkMaterial, bool addStraw, bool addLemon, bool addBubbles, bool addCoconutGarnish)
    {
        Frustum("glass", 0, 0.027f, 0, 0.068f, 0.092f, 0.27f, 48, true, false);
        Torus("glass", 0, 0.297f, 0, 0.092f, 0.0035f, 48);
        Torus("glass", 0, 0.031f, 0, 0.068f, 0.003f, 40);
        Frustum(drinkMaterial, 0, 0.044f, 0, 0.062f, 0.082f, 0.195f, 40, true, true);
        Sphere("ice", -0.025f, 0.247f, 0.012f, 0.022f, 0.018f, 0.02f, 14);
        Sphere("ice", 0.025f, 0.258f, -0.018f, 0.019f, 0.016f, 0.018f, 14);
        if (addStraw)
            Rod("straw", 0.027f, 0.22f, -0.018f, 0.052f, 0.405f, -0.018f, 0.005f, 8);
        if (addLemon)
        {
            Sphere("lemon", 0.069f, 0.296f, 0.012f, 0.036f, 0.009f, 0.03f, 20);
            Sphere("cream", 0.069f, 0.305f, 0.012f, 0.024f, 0.002f, 0.019f, 16);
            Rod("leaf", -0.055f, 0.25f, -0.005f, -0.078f, 0.267f, 0.016f, 0.003f, 6);
        }
        if (addCoconutGarnish)
        {
            Sphere("foam", -0.035f, 0.249f, 0.018f, 0.025f, 0.01f, 0.02f, 16);
            Rod("leafLight", -0.045f, 0.26f, 0.015f, -0.078f, 0.277f, 0.02f, 0.003f, 6);
        }
        if (addBubbles)
        {
            Sphere("bubble", -0.03f, 0.12f, 0.018f, 0.007f, 0.007f, 0.007f, 10);
            Sphere("bubble", 0.024f, 0.17f, -0.02f, 0.006f, 0.006f, 0.006f, 10);
            Sphere("bubble", -0.012f, 0.21f, -0.035f, 0.005f, 0.005f, 0.005f, 10);
            Sphere("bubble", 0.042f, 0.115f, 0.012f, 0.004f, 0.004f, 0.004f, 10);
        }
    }

    static void AddBeer()
    {
        Frustum("glass", 0, 0.027f, 0, 0.071f, 0.09f, 0.28f, 48, true, false);
        Torus("glass", 0, 0.307f, 0, 0.09f, 0.0035f, 48);
        TorusVertical("glass", 0.113f, 0.16f, 0, 0.05f, 0.007f, 32);
        Frustum("beer", 0, 0.044f, 0, 0.065f, 0.079f, 0.22f, 40, true, true);
        Cylinder("foam", 0, 0.272f, 0, 0.08f, 0.032f, 40);
        Sphere("foam", -0.025f, 0.292f, 0.005f, 0.035f, 0.012f, 0.03f, 18);
        Sphere("foam", 0.026f, 0.29f, -0.006f, 0.029f, 0.01f, 0.026f, 18);
        Sphere("bubble", -0.026f, 0.13f, 0.012f, 0.005f, 0.005f, 0.005f, 10);
        Sphere("bubble", 0.018f, 0.19f, -0.022f, 0.004f, 0.004f, 0.004f, 10);
        Sphere("bubble", 0.041f, 0.1f, 0.006f, 0.004f, 0.004f, 0.004f, 10);
    }

    static void AddAguapanela()
    {
        AddCoffeeCup("aguapanela", false, false);
        Sphere("lemon", 0.105f, 0.046f, 0.065f, 0.022f, 0.006f, 0.02f, 16);
        Rod("bubble", -0.025f, 0.195f, 0, -0.034f, 0.235f, 0.006f, 0.002f, 6);
        Rod("bubble", 0.018f, 0.198f, 0.006f, 0.025f, 0.226f, 0, 0.0015f, 6);
    }

    static void AddHotChocolate()
    {
        AddCoffeeCup("hotChocolate", false, true);
        Rod("cinnamon", -0.025f, 0.18f, 0.018f, 0.027f, 0.19f, -0.016f, 0.005f, 8);
        Rod("cinnamon", -0.11f, 0.047f, 0.085f, -0.075f, 0.051f, 0.11f, 0.004f, 6);
    }

    static void AddLulada()
    {
        AddColdGlass("lulo", false, true, false, false);
        Rod("leafLight", 0.027f, 0.22f, -0.018f, 0.052f, 0.405f, -0.018f, 0.005f, 8);
        Sphere("luloPulp", -0.032f, 0.245f, 0.014f, 0.014f, 0.01f, 0.012f, 12);
        Sphere("luloPulp", 0.004f, 0.25f, -0.021f, 0.012f, 0.009f, 0.012f, 12);
        Sphere("luloPulp", 0.036f, 0.244f, 0.022f, 0.011f, 0.008f, 0.01f, 10);
        Sphere("luloPulp", -0.009f, 0.253f, -0.034f, 0.009f, 0.007f, 0.009f, 10);
    }

    static void AddAvena()
    {
        AddColdGlass("avena", false, false, false, false);
        Sphere("cinnamon", -0.034f, 0.243f, 0.018f, 0.004f, 0.003f, 0.004f, 8);
        Sphere("cinnamon", 0.008f, 0.244f, -0.014f, 0.0035f, 0.003f, 0.0035f, 8);
        Sphere("cinnamon", 0.032f, 0.243f, 0.018f, 0.003f, 0.0025f, 0.003f, 8);
        Rod("cinnamon", -0.075f, 0.247f, -0.012f, -0.09f, 0.28f, 0.01f, 0.004f, 6);
    }

    static void AddChicha()
    {
        Cylinder("terracotta", 0, 0.027f, 0, 0.135f, 0.025f, 40);
        Torus("gold", 0, 0.041f, 0, 0.122f, 0.002f, 40);
        Frustum("terracotta", 0, 0.039f, 0, 0.068f, 0.091f, 0.17f, 40, true, false);
        Torus("terracotta", 0, 0.209f, 0, 0.091f, 0.004f, 40);
        Frustum("chicha", 0, 0.055f, 0, 0.061f, 0.078f, 0.131f, 36, true, true);
        Cylinder("foam", 0, 0.185f, 0, 0.073f, 0.008f, 32);
        Sphere("maize", -0.023f, 0.19f, 0.01f, 0.006f, 0.003f, 0.005f, 10);
        Sphere("maize", 0.016f, 0.19f, -0.015f, 0.005f, 0.003f, 0.004f, 10);
        Sphere("maize", 0.036f, 0.19f, 0.018f, 0.004f, 0.0025f, 0.004f, 10);
    }

    static void AddMasato()
    {
        AddColdGlass("masato", false, false, false, false);
        Rod("cinnamon", -0.075f, 0.246f, 0.008f, -0.045f, 0.285f, -0.018f, 0.004f, 6);
        Sphere("cinnamon", 0.018f, 0.244f, 0.016f, 0.0035f, 0.003f, 0.0035f, 8);
        Sphere("cinnamon", 0.039f, 0.244f, -0.01f, 0.003f, 0.0025f, 0.003f, 8);
    }

    static void AddDrink(string type)
    {
        if (type == "coffee-tinto") AddCoffeeCup("coffee", false, false);
        else if (type == "coffee-campesino") AddCoffeeCup("campesino", true, false);
        else if (type == "coffee-milk") AddCoffeeCup("latte", false, true);
        else if (type == "milo") AddColdGlass("chocolateDrink", true, false, false, false);
        else if (type == "lemonade") AddColdGlass("lemonade", true, true, false, false);
        else if (type == "coconut-lemonade") AddColdGlass("coconutDrink", true, true, false, true);
        else if (type == "beer") AddBeer();
        else if (type == "soda") AddColdGlass("cola", true, true, false, false);
        else if (type == "water") AddColdGlass("water", false, false, false, false);
        else if (type == "sparkling-water") AddColdGlass("water", false, true, true, false);
        else if (type == "aguapanela") AddAguapanela();
        else if (type == "chocolate-hot") AddHotChocolate();
        else if (type == "lulada") AddLulada();
        else if (type == "avena") AddAvena();
        else if (type == "chicha") AddChicha();
        else if (type == "masato") AddMasato();
    }

    static List<DishMeshGroup> BuildDish(string type)
    {
        groups = new List<DishMeshGroup>();
        byName = new Dictionary<string, DishMeshGroup>();
        bool isDrink = type.StartsWith("coffee-") || type == "milo" || type == "lemonade" ||
            type == "coconut-lemonade" || type == "beer" || type == "soda" || type == "water" ||
            type == "sparkling-water" || type == "aguapanela" || type == "chocolate-hot" ||
            type == "lulada" || type == "avena" || type == "chicha" || type == "masato";
        if (!isDrink) AddPlate(type);
        if (isDrink) AddDrink(type);
        else if (type == "benedict") AddBenedict();
        else if (type == "mushrooms") AddMushrooms();
        else if (type == "fish") AddFish();
        else if (type == "thali") AddThali();
        else if (type == "risotto") AddRisotto();
        else if (type == "arepa-platano") AddArepaPlatano();
        else if (type == "aborrajados-bbq") AddAborrajadosBbq();
        else if (type == "aborrajados-sin-freir") AddAborrajadosSinFreir();
        else if (type == "papas-chorreadas") AddPapasChorreadas();
        else if (type == "carimanolas") AddCarimanolas();
        else if (type == "patacones") AddPatacones();
        else AddTart();
        return groups;
    }

    static void Pad(Stream stream)
    {
        while (stream.Length % 4 != 0) stream.WriteByte(0);
    }

    static string JsonString(string value)
    {
        return "\"" + value.Replace("\\", "\\\\").Replace("\"", "\\\"") + "\"";
    }

    static void WriteGlb(string name, string type, string outputPath)
    {
        List<DishMeshGroup> meshes = BuildDish(type);
        MemoryStream binary = new MemoryStream();
        List<string> views = new List<string>();
        List<string> accessors = new List<string>();
        List<string> primitives = new List<string>();
        List<string> nodes = new List<string>();
        List<int> sceneNodes = new List<int>();
        using (BinaryWriter writer = new BinaryWriter(binary, Encoding.UTF8, true))
        {
            for (int i = 0; i < meshes.Count; i++)
            {
                DishMeshGroup mesh = meshes[i];
                Pad(binary);
                int positionOffset = (int)binary.Position;
                float minX = float.MaxValue, minY = float.MaxValue, minZ = float.MaxValue;
                float maxX = float.MinValue, maxY = float.MinValue, maxZ = float.MinValue;
                for (int p = 0; p < mesh.Positions.Count; p += 3)
                {
                    float x = mesh.Positions[p], y = mesh.Positions[p + 1], z = mesh.Positions[p + 2];
                    minX = Math.Min(minX, x); minY = Math.Min(minY, y); minZ = Math.Min(minZ, z);
                    maxX = Math.Max(maxX, x); maxY = Math.Max(maxY, y); maxZ = Math.Max(maxZ, z);
                    writer.Write(x); writer.Write(y); writer.Write(z);
                }
                int positionLength = (int)binary.Position - positionOffset;
                views.Add("{\"buffer\":0,\"byteOffset\":" + positionOffset + ",\"byteLength\":" + positionLength + ",\"target\":34962}");
                int positionAccessor = accessors.Count;
                accessors.Add("{\"bufferView\":" + (views.Count - 1) + ",\"componentType\":5126,\"count\":" + (mesh.Positions.Count / 3) + ",\"type\":\"VEC3\",\"min\":[" +
                    minX.ToString("R", System.Globalization.CultureInfo.InvariantCulture) + "," + minY.ToString("R", System.Globalization.CultureInfo.InvariantCulture) + "," + minZ.ToString("R", System.Globalization.CultureInfo.InvariantCulture) + "],\"max\":[" +
                    maxX.ToString("R", System.Globalization.CultureInfo.InvariantCulture) + "," + maxY.ToString("R", System.Globalization.CultureInfo.InvariantCulture) + "," + maxZ.ToString("R", System.Globalization.CultureInfo.InvariantCulture) + "]}");

                Pad(binary);
                int normalOffset = (int)binary.Position;
                foreach (float value in mesh.Normals) writer.Write(value);
                int normalLength = (int)binary.Position - normalOffset;
                views.Add("{\"buffer\":0,\"byteOffset\":" + normalOffset + ",\"byteLength\":" + normalLength + ",\"target\":34962}");
                int normalAccessor = accessors.Count;
                accessors.Add("{\"bufferView\":" + (views.Count - 1) + ",\"componentType\":5126,\"count\":" + (mesh.Normals.Count / 3) + ",\"type\":\"VEC3\"}");

                Pad(binary);
                int indexOffset = (int)binary.Position;
                foreach (uint value in mesh.Indices) writer.Write(value);
                int indexLength = (int)binary.Position - indexOffset;
                views.Add("{\"buffer\":0,\"byteOffset\":" + indexOffset + ",\"byteLength\":" + indexLength + ",\"target\":34963}");
                int indexAccessor = accessors.Count;
                accessors.Add("{\"bufferView\":" + (views.Count - 1) + ",\"componentType\":5125,\"count\":" + mesh.Indices.Count + ",\"type\":\"SCALAR\"}");

                int materialIndex = new List<string>(Colors.Keys).IndexOf(mesh.Name);
                primitives.Add("{\"attributes\":{\"POSITION\":" + positionAccessor + ",\"NORMAL\":" + normalAccessor + "},\"indices\":" + indexAccessor + ",\"material\":" + materialIndex + "}");
                nodes.Add("{\"name\":" + JsonString(mesh.Name) + ",\"mesh\":" + i + "}");
                sceneNodes.Add(i);
            }
        }
        Pad(binary);

        List<string> materials = new List<string>();
        foreach (KeyValuePair<string, float[]> material in Colors)
        {
            float[] color = material.Value;
            float metallic = Metallic(material.Key);
            materials.Add("{\"name\":" + JsonString(material.Key) + ",\"pbrMetallicRoughness\":{\"baseColorFactor\":[" +
                color[0].ToString("R", System.Globalization.CultureInfo.InvariantCulture) + "," +
                color[1].ToString("R", System.Globalization.CultureInfo.InvariantCulture) + "," +
                color[2].ToString("R", System.Globalization.CultureInfo.InvariantCulture) + "," +
                color[3].ToString("R", System.Globalization.CultureInfo.InvariantCulture) +
                "],\"metallicFactor\":" + metallic.ToString("R", CultureInfo.InvariantCulture) +
                ",\"roughnessFactor\":" + Roughness(material.Key).ToString("R", CultureInfo.InvariantCulture) + "},\"doubleSided\":true" +
                (color[3] < 1f ? ",\"alphaMode\":\"BLEND\"" : "") + "}");
        }

        StringBuilder json = new StringBuilder();
        json.Append("{\"asset\":{\"version\":\"2.0\",\"generator\":\"El comienzo procedural dish models\"},\"scene\":0,\"scenes\":[{\"nodes\":[");
        json.Append(String.Join(",", sceneNodes));
        json.Append("]}],\"nodes\":["); json.Append(String.Join(",", nodes));
        json.Append("],\"meshes\":[");
        for (int i = 0; i < primitives.Count; i++)
        {
            if (i > 0) json.Append(",");
            json.Append("{\"name\":"); json.Append(JsonString(meshes[i].Name));
            json.Append(",\"primitives\":["); json.Append(primitives[i]); json.Append("]}");
        }
        json.Append("],\"materials\":["); json.Append(String.Join(",", materials));
        json.Append("],\"accessors\":["); json.Append(String.Join(",", accessors));
        json.Append("],\"bufferViews\":["); json.Append(String.Join(",", views));
        json.Append("],\"buffers\":[{\"byteLength\":"); json.Append(binary.Length); json.Append("}]}");

        byte[] jsonBytes = Encoding.UTF8.GetBytes(json.ToString());
        while (jsonBytes.Length % 4 != 0)
        {
            Array.Resize(ref jsonBytes, jsonBytes.Length + 1);
            jsonBytes[jsonBytes.Length - 1] = 0x20;
        }
        byte[] binaryBytes = binary.ToArray();
        using (FileStream file = File.Create(outputPath))
        using (BinaryWriter writer = new BinaryWriter(file))
        {
            writer.Write(0x46546C67u);
            writer.Write(2u);
            writer.Write((uint)(12 + 8 + jsonBytes.Length + 8 + binaryBytes.Length));
            writer.Write((uint)jsonBytes.Length);
            writer.Write(0x4E4F534Au);
            writer.Write(jsonBytes);
            writer.Write((uint)binaryBytes.Length);
            writer.Write(0x004E4942u);
            writer.Write(binaryBytes);
        }
    }

    static string Number(float value)
    {
        return value.ToString("0.######", CultureInfo.InvariantCulture);
    }

    static float Roughness(string material)
    {
        if (material == "glass") return 0.08f;
        if (material == "ice" || material == "bubble") return 0.18f;
        if (material == "terracotta") return 0.78f;
        if (material == "cinnamon") return 0.72f;
        if (material == "porcelain") return 0.82f;
        if (material == "gold" || material == "honey" || material == "butter") return 0.34f;
        if (material == "darkPlate") return 0.58f;
        if (material == "steel") return 0.38f;
        if (material == "wood") return 0.76f;
        if (material == "cream" || material == "white" || material == "icecream") return 0.42f;
        if (material == "peach" || material == "pear" || material == "fish") return 0.48f;
        if (material == "leaf" || material == "leafLight" || material == "asparagus") return 0.68f;
        if (material == "toast" || material == "cassava" || material == "plantain" || material == "potato") return 0.78f;
        if (material == "friedCrust") return 0.72f;
        return 0.62f;
    }

    static float Metallic(string material)
    {
        return material == "steel" ? 0.72f : material == "gold" ? 0.28f : 0f;
    }

    static void WriteUsdz(string name, string type, string outputPath)
    {
        List<DishMeshGroup> meshes = BuildDish(type);
        StringBuilder usda = new StringBuilder();
        usda.AppendLine("#usda 1.0");
        usda.AppendLine("(");
        usda.AppendLine("    defaultPrim = \"Dish\"");
        usda.AppendLine("    metersPerUnit = 1");
        usda.AppendLine("    upAxis = \"Y\"");
        usda.AppendLine(")");
        usda.AppendLine("def Xform \"Dish\" {");
        foreach (KeyValuePair<string, float[]> material in Colors)
        {
            float[] color = material.Value;
            string materialPath = "Mat_" + material.Key;
            usda.Append("    def Material \"").Append(materialPath).AppendLine("\" {");
            usda.Append("        token outputs:surface.connect = </Dish/").Append(materialPath).AppendLine("/Shader.outputs:surface>");
            usda.AppendLine("        def Shader \"Shader\" {");
            usda.AppendLine("            uniform token info:id = \"UsdPreviewSurface\"");
            usda.Append("            color3f inputs:diffuseColor = (").Append(Number(color[0])).Append(", ")
                .Append(Number(color[1])).Append(", ").Append(Number(color[2])).AppendLine(")");
            usda.Append("            float inputs:metallic = ").Append(Number(Metallic(material.Key))).AppendLine();
            usda.Append("            float inputs:roughness = ").Append(Number(Roughness(material.Key))).AppendLine();
            if (color[3] < 1f)
                usda.Append("            float inputs:opacity = ").Append(Number(color[3])).AppendLine();
            usda.AppendLine("            token outputs:surface");
            usda.AppendLine("        }");
            usda.AppendLine("    }");
        }
        for (int meshIndex = 0; meshIndex < meshes.Count; meshIndex++)
        {
            DishMeshGroup mesh = meshes[meshIndex];
            float[] color = Colors[mesh.Name];
            usda.Append("    def Mesh \"").Append(mesh.Name).AppendLine("\" {");
            usda.Append("        point3f[] points = [");
            for (int i = 0; i < mesh.Positions.Count; i += 3)
            {
                if (i > 0) usda.Append(",");
                usda.Append("(").Append(Number(mesh.Positions[i])).Append(", ")
                    .Append(Number(mesh.Positions[i + 1])).Append(", ")
                    .Append(Number(mesh.Positions[i + 2])).Append(")");
            }
            usda.AppendLine("]");
            usda.Append("        int[] faceVertexCounts = [");
            for (int i = 0; i < mesh.Indices.Count; i += 3)
            {
                if (i > 0) usda.Append(",");
                usda.Append("3");
            }
            usda.AppendLine("]");
            usda.Append("        int[] faceVertexIndices = [");
            for (int i = 0; i < mesh.Indices.Count; i++)
            {
                if (i > 0) usda.Append(",");
                usda.Append(mesh.Indices[i]);
            }
            usda.AppendLine("]");
            usda.Append("        normal3f[] normals = [");
            for (int i = 0; i < mesh.Normals.Count; i += 3)
            {
                if (i > 0) usda.Append(",");
                usda.Append("(").Append(Number(mesh.Normals[i])).Append(", ")
                    .Append(Number(mesh.Normals[i + 1])).Append(", ")
                    .Append(Number(mesh.Normals[i + 2])).Append(")");
            }
            usda.AppendLine("]");
            usda.AppendLine("        uniform token normals:interpolation = \"vertex\"");
            usda.Append("        color3f[] primvars:displayColor = [(")
                .Append(Number(color[0])).Append(", ").Append(Number(color[1])).Append(", ").Append(Number(color[2])).AppendLine(")]");
            usda.AppendLine("        uniform token primvars:displayColor:interpolation = \"constant\"");
            usda.Append("        rel material:binding = </Dish/Mat_").Append(mesh.Name).AppendLine(">");
            usda.AppendLine("        uniform token subdivisionScheme = \"none\"");
            usda.AppendLine("    }");
        }
        usda.AppendLine("}");

        byte[] data = new UTF8Encoding(false).GetBytes(usda.ToString());
        byte[] fileName = Encoding.ASCII.GetBytes(name + ".usda");
        uint crc = 0xffffffffu;
        foreach (byte value in data)
        {
            crc ^= value;
            for (int bit = 0; bit < 8; bit++)
                crc = (crc & 1) != 0 ? (crc >> 1) ^ 0xedb88320u : crc >> 1;
        }
        crc ^= 0xffffffffu;

        using (FileStream file = File.Create(outputPath))
        using (BinaryWriter writer = new BinaryWriter(file))
        {
            writer.Write(0x04034b50u);
            writer.Write((ushort)20);
            writer.Write((ushort)0);
            writer.Write((ushort)0);
            writer.Write((ushort)0);
            writer.Write((ushort)0);
            writer.Write(crc);
            writer.Write((uint)data.Length);
            writer.Write((uint)data.Length);
            writer.Write((ushort)fileName.Length);
            int paddingLength = (64 - ((30 + fileName.Length + 4) % 64)) % 64;
            writer.Write((ushort)(4 + paddingLength));
            writer.Write(fileName);
            writer.Write((ushort)0x1986);
            writer.Write((ushort)paddingLength);
            writer.Write(new byte[paddingLength]);
            writer.Write(data);

            writer.Flush();
            uint centralOffset = (uint)file.Position;
            writer.Write(0x02014b50u);
            writer.Write((ushort)20);
            writer.Write((ushort)20);
            writer.Write((ushort)0);
            writer.Write((ushort)0);
            writer.Write((ushort)0);
            writer.Write((ushort)0);
            writer.Write(crc);
            writer.Write((uint)data.Length);
            writer.Write((uint)data.Length);
            writer.Write((ushort)fileName.Length);
            writer.Write((ushort)0);
            writer.Write((ushort)0);
            writer.Write((ushort)0);
            writer.Write((ushort)0);
            writer.Write((uint)0);
            writer.Write((uint)0);
            writer.Write(fileName);
            writer.Flush();
            uint centralSize = (uint)file.Position - centralOffset;

            writer.Write(0x06054b50u);
            writer.Write((ushort)0);
            writer.Write((ushort)0);
            writer.Write((ushort)1);
            writer.Write((ushort)1);
            writer.Write(centralSize);
            writer.Write(centralOffset);
            writer.Write((ushort)0);
        }
    }

    public static void Generate(string root)
    {
        Directory.CreateDirectory(root);
        WriteGlb("benedict", "benedict", Path.Combine(root, "huevos-benedictinos.glb"));
        WriteUsdz("benedict", "benedict", Path.Combine(root, "huevos-benedictinos.usdz"));
        WriteGlb("hongos", "mushrooms", Path.Combine(root, "hongos.glb"));
        WriteUsdz("hongos", "mushrooms", Path.Combine(root, "hongos.usdz"));
        WriteGlb("pesca", "fish", Path.Combine(root, "pesca.glb"));
        WriteUsdz("pesca", "fish", Path.Combine(root, "pesca.usdz"));
        WriteGlb("thali", "thali", Path.Combine(root, "thali.glb"));
        WriteUsdz("thali", "thali", Path.Combine(root, "thali.usdz"));
        WriteGlb("risotto", "risotto", Path.Combine(root, "risotto.glb"));
        WriteUsdz("risotto", "risotto", Path.Combine(root, "risotto.usdz"));
        WriteGlb("tarta", "tart", Path.Combine(root, "tarta.glb"));
        WriteUsdz("tarta", "tart", Path.Combine(root, "tarta.usdz"));
        WriteGlb("coffee-tinto", "coffee-tinto", Path.Combine(root, "cafe-tinto-colombiano.glb"));
        WriteUsdz("coffee-tinto", "coffee-tinto", Path.Combine(root, "cafe-tinto-colombiano.usdz"));
        WriteGlb("coffee-campesino", "coffee-campesino", Path.Combine(root, "cafe-campesino.glb"));
        WriteUsdz("coffee-campesino", "coffee-campesino", Path.Combine(root, "cafe-campesino.usdz"));
        WriteGlb("coffee-milk", "coffee-milk", Path.Combine(root, "cafe-con-leche.glb"));
        WriteUsdz("coffee-milk", "coffee-milk", Path.Combine(root, "cafe-con-leche.usdz"));
        WriteGlb("milo", "milo", Path.Combine(root, "milo-frio.glb"));
        WriteUsdz("milo", "milo", Path.Combine(root, "milo-frio.usdz"));
        WriteGlb("lemonade", "lemonade", Path.Combine(root, "limonada-natural.glb"));
        WriteUsdz("lemonade", "lemonade", Path.Combine(root, "limonada-natural.usdz"));
        WriteGlb("coconut-lemonade", "coconut-lemonade", Path.Combine(root, "limonada-coco.glb"));
        WriteUsdz("coconut-lemonade", "coconut-lemonade", Path.Combine(root, "limonada-coco.usdz"));
        WriteGlb("beer", "beer", Path.Combine(root, "cerveza.glb"));
        WriteUsdz("beer", "beer", Path.Combine(root, "cerveza.usdz"));
        WriteGlb("soda", "soda", Path.Combine(root, "gaseosa.glb"));
        WriteUsdz("soda", "soda", Path.Combine(root, "gaseosa.usdz"));
        WriteGlb("water", "water", Path.Combine(root, "agua-sin-gas.glb"));
        WriteUsdz("water", "water", Path.Combine(root, "agua-sin-gas.usdz"));
        WriteGlb("sparkling-water", "sparkling-water", Path.Combine(root, "agua-con-gas.glb"));
        WriteUsdz("sparkling-water", "sparkling-water", Path.Combine(root, "agua-con-gas.usdz"));
        WriteGlb("aguapanela", "aguapanela", Path.Combine(root, "aguapanela.glb"));
        WriteUsdz("aguapanela", "aguapanela", Path.Combine(root, "aguapanela.usdz"));
        WriteGlb("chocolate-hot", "chocolate-hot", Path.Combine(root, "chocolate-caliente.glb"));
        WriteUsdz("chocolate-hot", "chocolate-hot", Path.Combine(root, "chocolate-caliente.usdz"));
        WriteGlb("lulada", "lulada", Path.Combine(root, "lulada.glb"));
        WriteUsdz("lulada", "lulada", Path.Combine(root, "lulada.usdz"));
        WriteGlb("avena", "avena", Path.Combine(root, "avena-colombiana.glb"));
        WriteUsdz("avena", "avena", Path.Combine(root, "avena-colombiana.usdz"));
        WriteGlb("chicha", "chicha", Path.Combine(root, "chicha.glb"));
        WriteUsdz("chicha", "chicha", Path.Combine(root, "chicha.usdz"));
        WriteGlb("masato", "masato", Path.Combine(root, "masato.glb"));
        WriteUsdz("masato", "masato", Path.Combine(root, "masato.usdz"));
        WriteGlb("arepa-platano-rellena", "arepa-platano", Path.Combine(root, "arepa-platano-rellena.glb"));
        WriteUsdz("arepa-platano-rellena", "arepa-platano", Path.Combine(root, "arepa-platano-rellena.usdz"));
        WriteGlb("aborrajados-bbq", "aborrajados-bbq", Path.Combine(root, "aborrajados-bbq.glb"));
        WriteUsdz("aborrajados-bbq", "aborrajados-bbq", Path.Combine(root, "aborrajados-bbq.usdz"));
        WriteGlb("aborrajados-sin-freir", "aborrajados-sin-freir", Path.Combine(root, "aborrajados-sin-freir.glb"));
        WriteUsdz("aborrajados-sin-freir", "aborrajados-sin-freir", Path.Combine(root, "aborrajados-sin-freir.usdz"));
        WriteGlb("papas-chorreadas", "papas-chorreadas", Path.Combine(root, "papas-chorreadas.glb"));
        WriteUsdz("papas-chorreadas", "papas-chorreadas", Path.Combine(root, "papas-chorreadas.usdz"));
        WriteGlb("carimanolas-caribenas", "carimanolas", Path.Combine(root, "carimanolas-caribenas.glb"));
        WriteUsdz("carimanolas-caribenas", "carimanolas", Path.Combine(root, "carimanolas-caribenas.usdz"));
        WriteGlb("patacones-toppings", "patacones", Path.Combine(root, "patacones-toppings.glb"));
        WriteUsdz("patacones-toppings", "patacones", Path.Combine(root, "patacones-toppings.usdz"));
    }
}
