# This file is generated by gyp; do not edit.

TOOLSET := target
TARGET := canvas
DEFS_Debug := \
	'-DNODE_GYP_MODULE_NAME=canvas' \
	'-DUSING_UV_SHARED=1' \
	'-DUSING_V8_SHARED=1' \
	'-DV8_DEPRECATION_WARNINGS=1' \
	'-DV8_DEPRECATION_WARNINGS' \
	'-DV8_IMMINENT_DEPRECATION_WARNINGS' \
	'-D_DARWIN_USE_64_BIT_INODE=1' \
	'-D_LARGEFILE_SOURCE' \
	'-D_FILE_OFFSET_BITS=64' \
	'-DOPENSSL_NO_PINSHARED' \
	'-DOPENSSL_THREADS' \
	'-DHAVE_JPEG' \
	'-DHAVE_GIF' \
	'-DHAVE_RSVG' \
	'-DBUILDING_NODE_EXTENSION' \
	'-DDEBUG' \
	'-D_DEBUG' \
	'-DV8_ENABLE_CHECKS'

# Flags passed to all source files.
CFLAGS_Debug := \
	-O0 \
	-gdwarf-2 \
	-mmacosx-version-min=10.13 \
	-arch x86_64 \
	-Wall \
	-Wendif-labels \
	-W \
	-Wno-unused-parameter

# Flags passed to only C files.
CFLAGS_C_Debug := \
	-fno-strict-aliasing

# Flags passed to only C++ files.
CFLAGS_CC_Debug := \
	-std=gnu++1y \
	-stdlib=libc++ \
	-fno-rtti \
	-fno-strict-aliasing

# Flags passed to only ObjC files.
CFLAGS_OBJC_Debug :=

# Flags passed to only ObjC++ files.
CFLAGS_OBJCC_Debug :=

INCS_Debug := \
	-I/Users/marketin/Library/Caches/node-gyp/14.20.0/include/node \
	-I/Users/marketin/Library/Caches/node-gyp/14.20.0/src \
	-I/Users/marketin/Library/Caches/node-gyp/14.20.0/deps/openssl/config \
	-I/Users/marketin/Library/Caches/node-gyp/14.20.0/deps/openssl/openssl/include \
	-I/Users/marketin/Library/Caches/node-gyp/14.20.0/deps/uv/include \
	-I/Users/marketin/Library/Caches/node-gyp/14.20.0/deps/zlib \
	-I/Users/marketin/Library/Caches/node-gyp/14.20.0/deps/v8/include \
	-I$(srcdir)/node_modules/nan \
	-I/usr/local/Cellar/cairo/1.16.0_5/include/cairo \
	-I/usr/local/Cellar/glib/2.74.4/include \
	-I/usr/local/Cellar/glib/2.74.4/include/glib-2.0 \
	-I/usr/local/Cellar/glib/2.74.4/lib/glib-2.0/include \
	-I/usr/local/opt/gettext/include \
	-I/usr/local/Cellar/pcre2/10.42/include \
	-I/usr/local/Cellar/pixman/0.42.2/include/pixman-1 \
	-I/usr/local/Cellar/fontconfig/2.14.1/include \
	-I/usr/local/opt/freetype/include/freetype2 \
	-I/usr/local/Cellar/libpng/1.6.39/include/libpng16 \
	-I/usr/local/Cellar/libxcb/1.15/include \
	-I/usr/local/Cellar/libxrender/0.9.11/include \
	-I/usr/local/Cellar/libxext/1.3.5/include \
	-I/usr/local/Cellar/libx11/1.8.2/include \
	-I/usr/local/Cellar/libxau/1.0.11/include \
	-I/usr/local/Cellar/libxdmcp/1.1.4/include \
	-I/usr/local/Cellar/xorgproto/2022.2/include \
	-I/Library/Developer/CommandLineTools/SDKs/MacOSX11.sdk/usr/include/ffi \
	-I/usr/local/Cellar/pango/1.50.12/include/pango-1.0 \
	-I/usr/local/Cellar/harfbuzz/5.3.1/include/harfbuzz \
	-I/usr/local/Cellar/fribidi/1.0.12/include/fribidi \
	-I/usr/local/Cellar/graphite2/1.3.14/include \
	-I/usr/local/Cellar/jpeg-turbo/2.1.4/include \
	-I/opt/homebrew/include \
	-I/usr/local/Cellar/librsvg/2.55.1/include/librsvg-2.0 \
	-I/usr/local/Cellar/gdk-pixbuf/2.42.10/include/gdk-pixbuf-2.0 \
	-I/usr/local/Cellar/libtiff/4.4.0_1/include

DEFS_Release := \
	'-DNODE_GYP_MODULE_NAME=canvas' \
	'-DUSING_UV_SHARED=1' \
	'-DUSING_V8_SHARED=1' \
	'-DV8_DEPRECATION_WARNINGS=1' \
	'-DV8_DEPRECATION_WARNINGS' \
	'-DV8_IMMINENT_DEPRECATION_WARNINGS' \
	'-D_DARWIN_USE_64_BIT_INODE=1' \
	'-D_LARGEFILE_SOURCE' \
	'-D_FILE_OFFSET_BITS=64' \
	'-DOPENSSL_NO_PINSHARED' \
	'-DOPENSSL_THREADS' \
	'-DHAVE_JPEG' \
	'-DHAVE_GIF' \
	'-DHAVE_RSVG' \
	'-DBUILDING_NODE_EXTENSION'

# Flags passed to all source files.
CFLAGS_Release := \
	-O3 \
	-gdwarf-2 \
	-mmacosx-version-min=10.13 \
	-arch x86_64 \
	-Wall \
	-Wendif-labels \
	-W \
	-Wno-unused-parameter

# Flags passed to only C files.
CFLAGS_C_Release := \
	-fno-strict-aliasing

# Flags passed to only C++ files.
CFLAGS_CC_Release := \
	-std=gnu++1y \
	-stdlib=libc++ \
	-fno-rtti \
	-fno-strict-aliasing

# Flags passed to only ObjC files.
CFLAGS_OBJC_Release :=

# Flags passed to only ObjC++ files.
CFLAGS_OBJCC_Release :=

INCS_Release := \
	-I/Users/marketin/Library/Caches/node-gyp/14.20.0/include/node \
	-I/Users/marketin/Library/Caches/node-gyp/14.20.0/src \
	-I/Users/marketin/Library/Caches/node-gyp/14.20.0/deps/openssl/config \
	-I/Users/marketin/Library/Caches/node-gyp/14.20.0/deps/openssl/openssl/include \
	-I/Users/marketin/Library/Caches/node-gyp/14.20.0/deps/uv/include \
	-I/Users/marketin/Library/Caches/node-gyp/14.20.0/deps/zlib \
	-I/Users/marketin/Library/Caches/node-gyp/14.20.0/deps/v8/include \
	-I$(srcdir)/node_modules/nan \
	-I/usr/local/Cellar/cairo/1.16.0_5/include/cairo \
	-I/usr/local/Cellar/glib/2.74.4/include \
	-I/usr/local/Cellar/glib/2.74.4/include/glib-2.0 \
	-I/usr/local/Cellar/glib/2.74.4/lib/glib-2.0/include \
	-I/usr/local/opt/gettext/include \
	-I/usr/local/Cellar/pcre2/10.42/include \
	-I/usr/local/Cellar/pixman/0.42.2/include/pixman-1 \
	-I/usr/local/Cellar/fontconfig/2.14.1/include \
	-I/usr/local/opt/freetype/include/freetype2 \
	-I/usr/local/Cellar/libpng/1.6.39/include/libpng16 \
	-I/usr/local/Cellar/libxcb/1.15/include \
	-I/usr/local/Cellar/libxrender/0.9.11/include \
	-I/usr/local/Cellar/libxext/1.3.5/include \
	-I/usr/local/Cellar/libx11/1.8.2/include \
	-I/usr/local/Cellar/libxau/1.0.11/include \
	-I/usr/local/Cellar/libxdmcp/1.1.4/include \
	-I/usr/local/Cellar/xorgproto/2022.2/include \
	-I/Library/Developer/CommandLineTools/SDKs/MacOSX11.sdk/usr/include/ffi \
	-I/usr/local/Cellar/pango/1.50.12/include/pango-1.0 \
	-I/usr/local/Cellar/harfbuzz/5.3.1/include/harfbuzz \
	-I/usr/local/Cellar/fribidi/1.0.12/include/fribidi \
	-I/usr/local/Cellar/graphite2/1.3.14/include \
	-I/usr/local/Cellar/jpeg-turbo/2.1.4/include \
	-I/opt/homebrew/include \
	-I/usr/local/Cellar/librsvg/2.55.1/include/librsvg-2.0 \
	-I/usr/local/Cellar/gdk-pixbuf/2.42.10/include/gdk-pixbuf-2.0 \
	-I/usr/local/Cellar/libtiff/4.4.0_1/include

OBJS := \
	$(obj).target/$(TARGET)/src/backend/Backend.o \
	$(obj).target/$(TARGET)/src/backend/ImageBackend.o \
	$(obj).target/$(TARGET)/src/backend/PdfBackend.o \
	$(obj).target/$(TARGET)/src/backend/SvgBackend.o \
	$(obj).target/$(TARGET)/src/bmp/BMPParser.o \
	$(obj).target/$(TARGET)/src/Backends.o \
	$(obj).target/$(TARGET)/src/Canvas.o \
	$(obj).target/$(TARGET)/src/CanvasGradient.o \
	$(obj).target/$(TARGET)/src/CanvasPattern.o \
	$(obj).target/$(TARGET)/src/CanvasRenderingContext2d.o \
	$(obj).target/$(TARGET)/src/closure.o \
	$(obj).target/$(TARGET)/src/color.o \
	$(obj).target/$(TARGET)/src/Image.o \
	$(obj).target/$(TARGET)/src/ImageData.o \
	$(obj).target/$(TARGET)/src/init.o \
	$(obj).target/$(TARGET)/src/register_font.o

# Add to the list of files we specially track dependencies for.
all_deps += $(OBJS)

# CFLAGS et al overrides must be target-local.
# See "Target-specific Variable Values" in the GNU Make manual.
$(OBJS): TOOLSET := $(TOOLSET)
$(OBJS): GYP_CFLAGS := $(DEFS_$(BUILDTYPE)) $(INCS_$(BUILDTYPE))  $(CFLAGS_$(BUILDTYPE)) $(CFLAGS_C_$(BUILDTYPE))
$(OBJS): GYP_CXXFLAGS := $(DEFS_$(BUILDTYPE)) $(INCS_$(BUILDTYPE))  $(CFLAGS_$(BUILDTYPE)) $(CFLAGS_CC_$(BUILDTYPE))
$(OBJS): GYP_OBJCFLAGS := $(DEFS_$(BUILDTYPE)) $(INCS_$(BUILDTYPE))  $(CFLAGS_$(BUILDTYPE)) $(CFLAGS_C_$(BUILDTYPE)) $(CFLAGS_OBJC_$(BUILDTYPE))
$(OBJS): GYP_OBJCXXFLAGS := $(DEFS_$(BUILDTYPE)) $(INCS_$(BUILDTYPE))  $(CFLAGS_$(BUILDTYPE)) $(CFLAGS_CC_$(BUILDTYPE)) $(CFLAGS_OBJCC_$(BUILDTYPE))

# Suffix rules, putting all outputs into $(obj).

$(obj).$(TOOLSET)/$(TARGET)/%.o: $(srcdir)/%.cc FORCE_DO_CMD
	@$(call do_cmd,cxx,1)

# Try building from generated source, too.

$(obj).$(TOOLSET)/$(TARGET)/%.o: $(obj).$(TOOLSET)/%.cc FORCE_DO_CMD
	@$(call do_cmd,cxx,1)

$(obj).$(TOOLSET)/$(TARGET)/%.o: $(obj)/%.cc FORCE_DO_CMD
	@$(call do_cmd,cxx,1)

# End of this set of suffix rules
### Rules for final target.
LDFLAGS_Debug := \
	-undefined dynamic_lookup \
	-Wl,-no_pie \
	-Wl,-search_paths_first \
	-mmacosx-version-min=10.13 \
	-arch x86_64 \
	-L$(builddir) \
	-stdlib=libc++

LIBTOOLFLAGS_Debug := \
	-undefined dynamic_lookup \
	-Wl,-no_pie \
	-Wl,-search_paths_first

LDFLAGS_Release := \
	-undefined dynamic_lookup \
	-Wl,-no_pie \
	-Wl,-search_paths_first \
	-mmacosx-version-min=10.13 \
	-arch x86_64 \
	-L$(builddir) \
	-stdlib=libc++

LIBTOOLFLAGS_Release := \
	-undefined dynamic_lookup \
	-Wl,-no_pie \
	-Wl,-search_paths_first

LIBS := \
	-L/usr/local/Cellar/pixman/0.42.2/lib \
	-lpixman-1 \
	-L/usr/local/Cellar/cairo/1.16.0_5/lib \
	-lcairo \
	-L/usr/local/Cellar/libpng/1.6.39/lib \
	-lpng16 \
	-L/usr/local/Cellar/pango/1.50.12/lib \
	-L/usr/local/Cellar/glib/2.74.4/lib \
	-L/usr/local/opt/gettext/lib \
	-L/usr/local/Cellar/harfbuzz/5.3.1/lib \
	-lpangocairo-1.0 \
	-lpango-1.0 \
	-lgobject-2.0 \
	-lglib-2.0 \
	-lintl \
	-lharfbuzz \
	-L/usr/local/opt/freetype/lib \
	-lfreetype \
	-L/usr/local/Cellar/jpeg-turbo/2.1.4/lib \
	-ljpeg \
	-L/opt/homebrew/lib \
	-lgif \
	-L/usr/local/Cellar/librsvg/2.55.1/lib \
	-L/usr/local/Cellar/gdk-pixbuf/2.42.10/lib \
	-lrsvg-2 \
	-lm \
	-lgio-2.0 \
	-lgdk_pixbuf-2.0

$(builddir)/canvas.node: GYP_LDFLAGS := $(LDFLAGS_$(BUILDTYPE))
$(builddir)/canvas.node: LIBS := $(LIBS)
$(builddir)/canvas.node: GYP_LIBTOOLFLAGS := $(LIBTOOLFLAGS_$(BUILDTYPE))
$(builddir)/canvas.node: TOOLSET := $(TOOLSET)
$(builddir)/canvas.node: $(OBJS) FORCE_DO_CMD
	$(call do_cmd,solink_module)

all_deps += $(builddir)/canvas.node
# Add target alias
.PHONY: canvas
canvas: $(builddir)/canvas.node

# Short alias for building this executable.
.PHONY: canvas.node
canvas.node: $(builddir)/canvas.node

# Add executable to "all" target.
.PHONY: all
all: $(builddir)/canvas.node

