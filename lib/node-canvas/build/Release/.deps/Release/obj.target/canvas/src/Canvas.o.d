cmd_Release/obj.target/canvas/src/Canvas.o := c++ '-DNODE_GYP_MODULE_NAME=canvas' '-DUSING_UV_SHARED=1' '-DUSING_V8_SHARED=1' '-DV8_DEPRECATION_WARNINGS=1' '-DV8_DEPRECATION_WARNINGS' '-DV8_IMMINENT_DEPRECATION_WARNINGS' '-D_DARWIN_USE_64_BIT_INODE=1' '-D_LARGEFILE_SOURCE' '-D_FILE_OFFSET_BITS=64' '-DOPENSSL_NO_PINSHARED' '-DOPENSSL_THREADS' '-DHAVE_JPEG' '-DHAVE_GIF' '-DHAVE_RSVG' '-DBUILDING_NODE_EXTENSION' -I/Users/marketin/Library/Caches/node-gyp/14.20.0/include/node -I/Users/marketin/Library/Caches/node-gyp/14.20.0/src -I/Users/marketin/Library/Caches/node-gyp/14.20.0/deps/openssl/config -I/Users/marketin/Library/Caches/node-gyp/14.20.0/deps/openssl/openssl/include -I/Users/marketin/Library/Caches/node-gyp/14.20.0/deps/uv/include -I/Users/marketin/Library/Caches/node-gyp/14.20.0/deps/zlib -I/Users/marketin/Library/Caches/node-gyp/14.20.0/deps/v8/include -I../node_modules/nan -I/usr/local/Cellar/cairo/1.16.0_5/include/cairo -I/usr/local/Cellar/glib/2.74.4/include -I/usr/local/Cellar/glib/2.74.4/include/glib-2.0 -I/usr/local/Cellar/glib/2.74.4/lib/glib-2.0/include -I/usr/local/opt/gettext/include -I/usr/local/Cellar/pcre2/10.42/include -I/usr/local/Cellar/pixman/0.42.2/include/pixman-1 -I/usr/local/Cellar/fontconfig/2.14.1/include -I/usr/local/opt/freetype/include/freetype2 -I/usr/local/Cellar/libpng/1.6.39/include/libpng16 -I/usr/local/Cellar/libxcb/1.15/include -I/usr/local/Cellar/libxrender/0.9.11/include -I/usr/local/Cellar/libxext/1.3.5/include -I/usr/local/Cellar/libx11/1.8.2/include -I/usr/local/Cellar/libxau/1.0.11/include -I/usr/local/Cellar/libxdmcp/1.1.4/include -I/usr/local/Cellar/xorgproto/2022.2/include -I/Library/Developer/CommandLineTools/SDKs/MacOSX11.sdk/usr/include/ffi -I/usr/local/Cellar/pango/1.50.12/include/pango-1.0 -I/usr/local/Cellar/harfbuzz/5.3.1/include/harfbuzz -I/usr/local/Cellar/fribidi/1.0.12/include/fribidi -I/usr/local/Cellar/graphite2/1.3.14/include -I/usr/local/Cellar/jpeg-turbo/2.1.4/include -I/opt/homebrew/include -I/usr/local/Cellar/librsvg/2.55.1/include/librsvg-2.0 -I/usr/local/Cellar/gdk-pixbuf/2.42.10/include/gdk-pixbuf-2.0 -I/usr/local/Cellar/libtiff/4.4.0_1/include  -O3 -gdwarf-2 -mmacosx-version-min=10.13 -arch x86_64 -Wall -Wendif-labels -W -Wno-unused-parameter -std=gnu++1y -stdlib=libc++ -fno-rtti -fno-strict-aliasing -MMD -MF ./Release/.deps/Release/obj.target/canvas/src/Canvas.o.d.raw   -c -o Release/obj.target/canvas/src/Canvas.o ../src/Canvas.cc
Release/obj.target/canvas/src/Canvas.o: ../src/Canvas.cc ../src/Canvas.h \
  ../src/backend/Backend.h \
  /usr/local/Cellar/cairo/1.16.0_5/include/cairo/cairo.h \
  /usr/local/Cellar/cairo/1.16.0_5/include/cairo/cairo-version.h \
  /usr/local/Cellar/cairo/1.16.0_5/include/cairo/cairo-features.h \
  /usr/local/Cellar/cairo/1.16.0_5/include/cairo/cairo-deprecated.h \
  ../src/backend/../dll_visibility.h ../node_modules/nan/nan.h \
  /Users/marketin/Library/Caches/node-gyp/14.20.0/include/node/node_version.h \
  /Users/marketin/Library/Caches/node-gyp/14.20.0/include/node/uv.h \
  /Users/marketin/Library/Caches/node-gyp/14.20.0/include/node/uv/errno.h \
  /Users/marketin/Library/Caches/node-gyp/14.20.0/include/node/uv/version.h \
  /Users/marketin/Library/Caches/node-gyp/14.20.0/include/node/uv/unix.h \
  /Users/marketin/Library/Caches/node-gyp/14.20.0/include/node/uv/threadpool.h \
  /Users/marketin/Library/Caches/node-gyp/14.20.0/include/node/uv/darwin.h \
  /Users/marketin/Library/Caches/node-gyp/14.20.0/include/node/node.h \
  /Users/marketin/Library/Caches/node-gyp/14.20.0/include/node/v8.h \
  /Users/marketin/Library/Caches/node-gyp/14.20.0/include/node/cppgc/common.h \
  /Users/marketin/Library/Caches/node-gyp/14.20.0/include/node/v8config.h \
  /Users/marketin/Library/Caches/node-gyp/14.20.0/include/node/v8-internal.h \
  /Users/marketin/Library/Caches/node-gyp/14.20.0/include/node/v8-version.h \
  /Users/marketin/Library/Caches/node-gyp/14.20.0/include/node/v8-platform.h \
  /Users/marketin/Library/Caches/node-gyp/14.20.0/include/node/node_buffer.h \
  /Users/marketin/Library/Caches/node-gyp/14.20.0/include/node/node_object_wrap.h \
  ../node_modules/nan/nan_callbacks.h \
  ../node_modules/nan/nan_callbacks_12_inl.h \
  ../node_modules/nan/nan_maybe_43_inl.h \
  ../node_modules/nan/nan_converters.h \
  ../node_modules/nan/nan_converters_43_inl.h \
  ../node_modules/nan/nan_new.h \
  ../node_modules/nan/nan_implementation_12_inl.h \
  ../node_modules/nan/nan_persistent_12_inl.h \
  ../node_modules/nan/nan_weak.h ../node_modules/nan/nan_object_wrap.h \
  ../node_modules/nan/nan_private.h \
  ../node_modules/nan/nan_typedarray_contents.h \
  ../node_modules/nan/nan_json.h ../node_modules/nan/nan_scriptorigin.h \
  ../src/dll_visibility.h \
  /usr/local/Cellar/pango/1.50.12/include/pango-1.0/pango/pangocairo.h \
  /usr/local/Cellar/pango/1.50.12/include/pango-1.0/pango/pango.h \
  /usr/local/Cellar/pango/1.50.12/include/pango-1.0/pango/pango-attributes.h \
  /usr/local/Cellar/pango/1.50.12/include/pango-1.0/pango/pango-font.h \
  /usr/local/Cellar/pango/1.50.12/include/pango-1.0/pango/pango-coverage.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib-object.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gobject/gbinding.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/galloca.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gtypes.h \
  /usr/local/Cellar/glib/2.74.4/lib/glib-2.0/include/glibconfig.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gmacros.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gversionmacros.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/garray.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gasyncqueue.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gthread.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gatomic.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/glib-typeof.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gerror.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gquark.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gutils.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gbacktrace.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gbase64.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gbitlock.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gbookmarkfile.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gdatetime.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gtimezone.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gbytes.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gcharset.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gchecksum.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gconvert.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gdataset.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gdate.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gdir.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/genviron.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gfileutils.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/ggettext.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/ghash.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/glist.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gmem.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gnode.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/ghmac.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/ghook.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/ghostutils.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/giochannel.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gmain.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gpoll.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gslist.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gstring.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gunicode.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gkeyfile.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gmappedfile.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gmarkup.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gmessages.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gvariant.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gvarianttype.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/goption.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gpattern.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gprimes.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gqsort.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gqueue.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/grand.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/grcbox.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/grefcount.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/grefstring.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gregex.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gscanner.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gsequence.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gshell.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gslice.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gspawn.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gstrfuncs.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gstringchunk.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gstrvbuilder.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gtestutils.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gthreadpool.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gtimer.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gtrashstack.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gtree.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/guri.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/guuid.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gversion.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/deprecated/gallocator.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/deprecated/gcache.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/deprecated/gcompletion.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/deprecated/gmain.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/deprecated/grel.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/deprecated/gthread.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/glib-autocleanups.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gobject/gobject.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gobject/gtype.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gobject/gvalue.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gobject/gparam.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gobject/gclosure.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gobject/gsignal.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gobject/gmarshal.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gobject/gboxed.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gobject/glib-types.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gobject/gbindinggroup.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gobject/genums.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gobject/glib-enumtypes.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gobject/gparamspecs.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gobject/gsignalgroup.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gobject/gsourceclosure.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gobject/gtypemodule.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gobject/gtypeplugin.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gobject/gvaluearray.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gobject/gvaluetypes.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gobject/gobject-autocleanups.h \
  /usr/local/Cellar/pango/1.50.12/include/pango-1.0/pango/pango-version-macros.h \
  /usr/local/Cellar/pango/1.50.12/include/pango-1.0/pango/pango-features.h \
  /usr/local/Cellar/harfbuzz/5.3.1/include/harfbuzz/hb.h \
  /usr/local/Cellar/harfbuzz/5.3.1/include/harfbuzz/hb-blob.h \
  /usr/local/Cellar/harfbuzz/5.3.1/include/harfbuzz/hb-common.h \
  /usr/local/Cellar/harfbuzz/5.3.1/include/harfbuzz/hb-buffer.h \
  /usr/local/Cellar/harfbuzz/5.3.1/include/harfbuzz/hb-unicode.h \
  /usr/local/Cellar/harfbuzz/5.3.1/include/harfbuzz/hb-font.h \
  /usr/local/Cellar/harfbuzz/5.3.1/include/harfbuzz/hb-face.h \
  /usr/local/Cellar/harfbuzz/5.3.1/include/harfbuzz/hb-set.h \
  /usr/local/Cellar/harfbuzz/5.3.1/include/harfbuzz/hb-draw.h \
  /usr/local/Cellar/harfbuzz/5.3.1/include/harfbuzz/hb-deprecated.h \
  /usr/local/Cellar/harfbuzz/5.3.1/include/harfbuzz/hb-map.h \
  /usr/local/Cellar/harfbuzz/5.3.1/include/harfbuzz/hb-shape.h \
  /usr/local/Cellar/harfbuzz/5.3.1/include/harfbuzz/hb-shape-plan.h \
  /usr/local/Cellar/harfbuzz/5.3.1/include/harfbuzz/hb-style.h \
  /usr/local/Cellar/harfbuzz/5.3.1/include/harfbuzz/hb-version.h \
  /usr/local/Cellar/pango/1.50.12/include/pango-1.0/pango/pango-types.h \
  /usr/local/Cellar/pango/1.50.12/include/pango-1.0/pango/pango-gravity.h \
  /usr/local/Cellar/pango/1.50.12/include/pango-1.0/pango/pango-matrix.h \
  /usr/local/Cellar/pango/1.50.12/include/pango-1.0/pango/pango-script.h \
  /usr/local/Cellar/pango/1.50.12/include/pango-1.0/pango/pango-language.h \
  /usr/local/Cellar/pango/1.50.12/include/pango-1.0/pango/pango-bidi-type.h \
  /usr/local/Cellar/pango/1.50.12/include/pango-1.0/pango/pango-direction.h \
  /usr/local/Cellar/pango/1.50.12/include/pango-1.0/pango/pango-color.h \
  /usr/local/Cellar/pango/1.50.12/include/pango-1.0/pango/pango-break.h \
  /usr/local/Cellar/pango/1.50.12/include/pango-1.0/pango/pango-item.h \
  /usr/local/Cellar/pango/1.50.12/include/pango-1.0/pango/pango-context.h \
  /usr/local/Cellar/pango/1.50.12/include/pango-1.0/pango/pango-fontmap.h \
  /usr/local/Cellar/pango/1.50.12/include/pango-1.0/pango/pango-fontset.h \
  /usr/local/Cellar/pango/1.50.12/include/pango-1.0/pango/pango-engine.h \
  /usr/local/Cellar/pango/1.50.12/include/pango-1.0/pango/pango-glyph.h \
  /usr/local/Cellar/pango/1.50.12/include/pango-1.0/pango/pango-enum-types.h \
  /usr/local/Cellar/pango/1.50.12/include/pango-1.0/pango/pango-fontset-simple.h \
  /usr/local/Cellar/pango/1.50.12/include/pango-1.0/pango/pango-glyph-item.h \
  /usr/local/Cellar/pango/1.50.12/include/pango-1.0/pango/pango-layout.h \
  /usr/local/Cellar/pango/1.50.12/include/pango-1.0/pango/pango-tabs.h \
  /usr/local/Cellar/pango/1.50.12/include/pango-1.0/pango/pango-markup.h \
  /usr/local/Cellar/pango/1.50.12/include/pango-1.0/pango/pango-renderer.h \
  /usr/local/Cellar/pango/1.50.12/include/pango-1.0/pango/pango-utils.h \
  /usr/local/Cellar/cairo/1.16.0_5/include/cairo/cairo-pdf.h \
  /usr/local/Cellar/cairo/1.16.0_5/include/cairo/cairo-svg.h \
  ../src/CanvasRenderingContext2d.h ../src/color.h ../src/closure.h \
  /usr/local/Cellar/jpeg-turbo/2.1.4/include/jpeglib.h \
  /usr/local/Cellar/jpeg-turbo/2.1.4/include/jconfig.h \
  /usr/local/Cellar/jpeg-turbo/2.1.4/include/jmorecfg.h \
  /usr/local/Cellar/libpng/1.6.39/include/libpng16/png.h \
  /usr/local/Cellar/libpng/1.6.39/include/libpng16/pnglibconf.h \
  /usr/local/Cellar/libpng/1.6.39/include/libpng16/pngconf.h \
  ../src/PNG.h ../src/register_font.h ../src/Util.h ../src/JPEGStream.h \
  /usr/local/Cellar/jpeg-turbo/2.1.4/include/jerror.h \
  ../src/backend/ImageBackend.h ../src/backend/PdfBackend.h \
  ../src/backend/../closure.h ../src/backend/SvgBackend.h
../src/Canvas.cc:
../src/Canvas.h:
../src/backend/Backend.h:
/usr/local/Cellar/cairo/1.16.0_5/include/cairo/cairo.h:
/usr/local/Cellar/cairo/1.16.0_5/include/cairo/cairo-version.h:
/usr/local/Cellar/cairo/1.16.0_5/include/cairo/cairo-features.h:
/usr/local/Cellar/cairo/1.16.0_5/include/cairo/cairo-deprecated.h:
../src/backend/../dll_visibility.h:
../node_modules/nan/nan.h:
/Users/marketin/Library/Caches/node-gyp/14.20.0/include/node/node_version.h:
/Users/marketin/Library/Caches/node-gyp/14.20.0/include/node/uv.h:
/Users/marketin/Library/Caches/node-gyp/14.20.0/include/node/uv/errno.h:
/Users/marketin/Library/Caches/node-gyp/14.20.0/include/node/uv/version.h:
/Users/marketin/Library/Caches/node-gyp/14.20.0/include/node/uv/unix.h:
/Users/marketin/Library/Caches/node-gyp/14.20.0/include/node/uv/threadpool.h:
/Users/marketin/Library/Caches/node-gyp/14.20.0/include/node/uv/darwin.h:
/Users/marketin/Library/Caches/node-gyp/14.20.0/include/node/node.h:
/Users/marketin/Library/Caches/node-gyp/14.20.0/include/node/v8.h:
/Users/marketin/Library/Caches/node-gyp/14.20.0/include/node/cppgc/common.h:
/Users/marketin/Library/Caches/node-gyp/14.20.0/include/node/v8config.h:
/Users/marketin/Library/Caches/node-gyp/14.20.0/include/node/v8-internal.h:
/Users/marketin/Library/Caches/node-gyp/14.20.0/include/node/v8-version.h:
/Users/marketin/Library/Caches/node-gyp/14.20.0/include/node/v8-platform.h:
/Users/marketin/Library/Caches/node-gyp/14.20.0/include/node/node_buffer.h:
/Users/marketin/Library/Caches/node-gyp/14.20.0/include/node/node_object_wrap.h:
../node_modules/nan/nan_callbacks.h:
../node_modules/nan/nan_callbacks_12_inl.h:
../node_modules/nan/nan_maybe_43_inl.h:
../node_modules/nan/nan_converters.h:
../node_modules/nan/nan_converters_43_inl.h:
../node_modules/nan/nan_new.h:
../node_modules/nan/nan_implementation_12_inl.h:
../node_modules/nan/nan_persistent_12_inl.h:
../node_modules/nan/nan_weak.h:
../node_modules/nan/nan_object_wrap.h:
../node_modules/nan/nan_private.h:
../node_modules/nan/nan_typedarray_contents.h:
../node_modules/nan/nan_json.h:
../node_modules/nan/nan_scriptorigin.h:
../src/dll_visibility.h:
/usr/local/Cellar/pango/1.50.12/include/pango-1.0/pango/pangocairo.h:
/usr/local/Cellar/pango/1.50.12/include/pango-1.0/pango/pango.h:
/usr/local/Cellar/pango/1.50.12/include/pango-1.0/pango/pango-attributes.h:
/usr/local/Cellar/pango/1.50.12/include/pango-1.0/pango/pango-font.h:
/usr/local/Cellar/pango/1.50.12/include/pango-1.0/pango/pango-coverage.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib-object.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gobject/gbinding.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/galloca.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gtypes.h:
/usr/local/Cellar/glib/2.74.4/lib/glib-2.0/include/glibconfig.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gmacros.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gversionmacros.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/garray.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gasyncqueue.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gthread.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gatomic.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/glib-typeof.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gerror.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gquark.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gutils.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gbacktrace.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gbase64.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gbitlock.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gbookmarkfile.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gdatetime.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gtimezone.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gbytes.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gcharset.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gchecksum.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gconvert.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gdataset.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gdate.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gdir.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/genviron.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gfileutils.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/ggettext.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/ghash.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/glist.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gmem.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gnode.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/ghmac.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/ghook.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/ghostutils.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/giochannel.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gmain.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gpoll.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gslist.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gstring.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gunicode.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gkeyfile.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gmappedfile.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gmarkup.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gmessages.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gvariant.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gvarianttype.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/goption.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gpattern.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gprimes.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gqsort.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gqueue.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/grand.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/grcbox.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/grefcount.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/grefstring.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gregex.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gscanner.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gsequence.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gshell.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gslice.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gspawn.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gstrfuncs.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gstringchunk.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gstrvbuilder.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gtestutils.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gthreadpool.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gtimer.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gtrashstack.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gtree.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/guri.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/guuid.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gversion.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/deprecated/gallocator.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/deprecated/gcache.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/deprecated/gcompletion.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/deprecated/gmain.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/deprecated/grel.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/deprecated/gthread.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/glib-autocleanups.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gobject/gobject.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gobject/gtype.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gobject/gvalue.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gobject/gparam.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gobject/gclosure.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gobject/gsignal.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gobject/gmarshal.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gobject/gboxed.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gobject/glib-types.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gobject/gbindinggroup.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gobject/genums.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gobject/glib-enumtypes.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gobject/gparamspecs.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gobject/gsignalgroup.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gobject/gsourceclosure.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gobject/gtypemodule.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gobject/gtypeplugin.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gobject/gvaluearray.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gobject/gvaluetypes.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gobject/gobject-autocleanups.h:
/usr/local/Cellar/pango/1.50.12/include/pango-1.0/pango/pango-version-macros.h:
/usr/local/Cellar/pango/1.50.12/include/pango-1.0/pango/pango-features.h:
/usr/local/Cellar/harfbuzz/5.3.1/include/harfbuzz/hb.h:
/usr/local/Cellar/harfbuzz/5.3.1/include/harfbuzz/hb-blob.h:
/usr/local/Cellar/harfbuzz/5.3.1/include/harfbuzz/hb-common.h:
/usr/local/Cellar/harfbuzz/5.3.1/include/harfbuzz/hb-buffer.h:
/usr/local/Cellar/harfbuzz/5.3.1/include/harfbuzz/hb-unicode.h:
/usr/local/Cellar/harfbuzz/5.3.1/include/harfbuzz/hb-font.h:
/usr/local/Cellar/harfbuzz/5.3.1/include/harfbuzz/hb-face.h:
/usr/local/Cellar/harfbuzz/5.3.1/include/harfbuzz/hb-set.h:
/usr/local/Cellar/harfbuzz/5.3.1/include/harfbuzz/hb-draw.h:
/usr/local/Cellar/harfbuzz/5.3.1/include/harfbuzz/hb-deprecated.h:
/usr/local/Cellar/harfbuzz/5.3.1/include/harfbuzz/hb-map.h:
/usr/local/Cellar/harfbuzz/5.3.1/include/harfbuzz/hb-shape.h:
/usr/local/Cellar/harfbuzz/5.3.1/include/harfbuzz/hb-shape-plan.h:
/usr/local/Cellar/harfbuzz/5.3.1/include/harfbuzz/hb-style.h:
/usr/local/Cellar/harfbuzz/5.3.1/include/harfbuzz/hb-version.h:
/usr/local/Cellar/pango/1.50.12/include/pango-1.0/pango/pango-types.h:
/usr/local/Cellar/pango/1.50.12/include/pango-1.0/pango/pango-gravity.h:
/usr/local/Cellar/pango/1.50.12/include/pango-1.0/pango/pango-matrix.h:
/usr/local/Cellar/pango/1.50.12/include/pango-1.0/pango/pango-script.h:
/usr/local/Cellar/pango/1.50.12/include/pango-1.0/pango/pango-language.h:
/usr/local/Cellar/pango/1.50.12/include/pango-1.0/pango/pango-bidi-type.h:
/usr/local/Cellar/pango/1.50.12/include/pango-1.0/pango/pango-direction.h:
/usr/local/Cellar/pango/1.50.12/include/pango-1.0/pango/pango-color.h:
/usr/local/Cellar/pango/1.50.12/include/pango-1.0/pango/pango-break.h:
/usr/local/Cellar/pango/1.50.12/include/pango-1.0/pango/pango-item.h:
/usr/local/Cellar/pango/1.50.12/include/pango-1.0/pango/pango-context.h:
/usr/local/Cellar/pango/1.50.12/include/pango-1.0/pango/pango-fontmap.h:
/usr/local/Cellar/pango/1.50.12/include/pango-1.0/pango/pango-fontset.h:
/usr/local/Cellar/pango/1.50.12/include/pango-1.0/pango/pango-engine.h:
/usr/local/Cellar/pango/1.50.12/include/pango-1.0/pango/pango-glyph.h:
/usr/local/Cellar/pango/1.50.12/include/pango-1.0/pango/pango-enum-types.h:
/usr/local/Cellar/pango/1.50.12/include/pango-1.0/pango/pango-fontset-simple.h:
/usr/local/Cellar/pango/1.50.12/include/pango-1.0/pango/pango-glyph-item.h:
/usr/local/Cellar/pango/1.50.12/include/pango-1.0/pango/pango-layout.h:
/usr/local/Cellar/pango/1.50.12/include/pango-1.0/pango/pango-tabs.h:
/usr/local/Cellar/pango/1.50.12/include/pango-1.0/pango/pango-markup.h:
/usr/local/Cellar/pango/1.50.12/include/pango-1.0/pango/pango-renderer.h:
/usr/local/Cellar/pango/1.50.12/include/pango-1.0/pango/pango-utils.h:
/usr/local/Cellar/cairo/1.16.0_5/include/cairo/cairo-pdf.h:
/usr/local/Cellar/cairo/1.16.0_5/include/cairo/cairo-svg.h:
../src/CanvasRenderingContext2d.h:
../src/color.h:
../src/closure.h:
/usr/local/Cellar/jpeg-turbo/2.1.4/include/jpeglib.h:
/usr/local/Cellar/jpeg-turbo/2.1.4/include/jconfig.h:
/usr/local/Cellar/jpeg-turbo/2.1.4/include/jmorecfg.h:
/usr/local/Cellar/libpng/1.6.39/include/libpng16/png.h:
/usr/local/Cellar/libpng/1.6.39/include/libpng16/pnglibconf.h:
/usr/local/Cellar/libpng/1.6.39/include/libpng16/pngconf.h:
../src/PNG.h:
../src/register_font.h:
../src/Util.h:
../src/JPEGStream.h:
/usr/local/Cellar/jpeg-turbo/2.1.4/include/jerror.h:
../src/backend/ImageBackend.h:
../src/backend/PdfBackend.h:
../src/backend/../closure.h:
../src/backend/SvgBackend.h:
