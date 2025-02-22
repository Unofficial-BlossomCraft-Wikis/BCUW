/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      zIndex: {
        blur: "-1",
        grid: "-2",
      },
      backgroundImage: {
        "blue-purple-gradient":
          "linear-gradient(83.21deg, #3245FF 0%, #B845ED 100%)",
        "blue-green-gradient":
          "linear-gradient(247.23deg, #4AF2C8 0%, #2F4CB3 100%)",
        "red-pink-gradient":
          "linear-gradient(66.77deg, #D83333 0%, #F041FF 100%)",
        "orange-yellow-gradient":
          "linear-gradient(266.93deg, #F8E42E 0%, #FF7D54 100%)",
        "pink-purple-gradient":
          "linear-gradient(135deg, #FF69B4 0%, #8A2BE2 100%)",
        "progressbar-gradient":
          "var(--progressbar-gradient)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        ranks: {
          celestial: {
            DEFAULT: "var(--celestial)",
            foreground: "var(--celestial-foreground)",
          },
          immortal: {
            DEFAULT: "var(--immortal)",
            foreground: "var(--immortal-foreground)",
          },
          emperor: {
            DEFAULT: "var(--emperor)",
            foreground: "var(--emperor-foreground)",
          },
          shogun: {
            DEFAULT: "var(--shogun)",
            foreground: "var(--shogun-foreground)",
          },
          samurai: {
            DEFAULT: "var(--samurai)",
            foreground: "var(--samurai-foreground)",
          },
          pancake: {
            DEFAULT: "var(--pancake)",
            foreground: "var(--pancake-foreground)",
          },
          servers: {
            cherry: {
              DEFAULT: 'var(--cherry)',
              foreground: 'var(--cherry-foreground)'
            },
            spirit: {
              DEFAULT: 'var(--spirit)',
              foreground: 'var(--spirit-foreground)'
            },
            lotus: {
              DEFAULT: 'var(--lotus)',
              foreground: 'var(--lotus-foreground)'
            },
            tulip: {
              DEFAULT: 'var(--tulip)',
              foreground: 'var(--tulip-foreground)'
            }
          },
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("./tailwind/masonry")],
};
